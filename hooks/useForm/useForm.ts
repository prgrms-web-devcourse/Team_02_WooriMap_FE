import { useState, useCallback } from 'react';
import { IOnSubmit } from 'types';

interface IUseForm<T, V, K> {
  initialValues: T;
  errorState: V;
  onSubmit: ({ values, setErrors }: IOnSubmit<T>) => void;
  validateValues: (values: K) => V;
}

function useForm<T, V, K>({
  initialValues,
  errorState,
  onSubmit,
  validateValues,
}: IUseForm<T, V, K>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<V>({
    ...errorState,
    finalError: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const setStateWhenChanged = useCallback((name: string, value: any) => {
    if (name === 'position') {
      setValues((prev) => ({ ...prev, ...value }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, finalError: '', [name]: '' }));
  }, []);

  const handleChange = (
    e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name?: string,
    value?: T,
  ) => {
    if (name && value) {
      setStateWhenChanged(name, value);
    } else if (e) {
      const { name: n, value: v } = e.target;
      setStateWhenChanged(n, v);
    }
  };

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    setIsLoading(true);
    e.preventDefault();

    const stateRequiresCheckValidation = Object.keys(errors).reduce(
      (acc, key) => ({ ...acc, [key]: values[key as keyof T] }),
      {},
    ) as K;

    const newErrors = validateValues(stateRequiresCheckValidation);

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
