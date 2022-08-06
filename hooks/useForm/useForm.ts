import { useState, useCallback } from 'react';
import { IOnSubmit } from 'types';

interface IUseForm<T> {
  initialValues: T;
  onSubmit: ({ values, setErrors }: IOnSubmit<T>) => void;
  validateValues: (values: T) => T;
}

function useForm<T>({ initialValues, onSubmit, validateValues }: IUseForm<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<T>({
    ...initialValues,
    finalError: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, finalError: '', [name]: '' }));
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validateValues(values);

    if (Object.values(newErrors).every((x) => !x)) {
      onSubmit({ values, setErrors });
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
    setErrors,
    isLoading,
    handleChange,
    handleSubmit,
    removeAll,
  };
}

export default useForm;
