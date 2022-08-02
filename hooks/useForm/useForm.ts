import { useState, useCallback } from 'react';

interface IUseForm<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validateValues: (values: T) => T;
}

function useForm<T>({ initialValues, onSubmit, validateValues }: IUseForm<T>) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    setErrors((prev) => ({ ...prev, [name]: '' }));
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validateValues(values);

    if (Object.values(newErrors).every((x) => !x)) {
      onSubmit(values);
    }

    setErrors(newErrors);
    setIsLoading(false);
  };

  const removeAll = useCallback((name: string) => {
    setValues((prev) => ({ ...prev, [name]: '' }));
  }, []);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    removeAll,
  };
}

export default useForm;
