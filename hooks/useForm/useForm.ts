import { NextRouter, useRouter } from 'next/router';
import { useState, useCallback } from 'react';
import { ISingnUpRes } from 'types';

interface IUseForm<T> {
  initialValues: T;
  onSubmit: ({
    values,
    router,
  }: {
    values: T;
    router: NextRouter;
  }) => Promise<ISingnUpRes>;
  validateValues: (values: T) => T;
}

function useForm<T>({ initialValues, onSubmit, validateValues }: IUseForm<T>) {
  const router = useRouter();
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
      const response = await onSubmit({ values, router });

      console.log(response);

      if (response.message) {
        setErrors((prev) => ({ ...prev, finalError: response.message }));
        return;
      }
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
