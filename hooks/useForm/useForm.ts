import { useState, useCallback } from 'react';
import { checkStateIsValid } from 'utils';
import { IOnSubmit, IPostOnChangeProps, ISetValueState } from 'types';

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

  const setStateWhenChanged = useCallback(({ name, value }: ISetValueState) => {
    if (name === 'position') {
      setValues((prev) => ({
        ...prev,
        ...(value as { latitude: number; longitude: number }),
      }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, finalError: '', [name]: '' }));
  }, []);

  const handleChange = ({ e, name, value }: IPostOnChangeProps) => {
    if (name && value) {
      setStateWhenChanged({ name, value });
    } else if (e) {
      const { name: n, value: v } = e.target;
      setStateWhenChanged({ name: n, value: v });
    }
  };

  const setAllState = useCallback((newValues: T) => {
    setValues(newValues);
  }, []);

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    setIsLoading(true);
    e.preventDefault();

    const stateRequiresCheckValidation = Object.keys(errors).reduce(
      (acc, key) => ({ ...acc, [key]: values[key as keyof T] }),
      {},
    ) as K;

    const newErrors = validateValues(stateRequiresCheckValidation);

    if (checkStateIsValid<V>({ errorState: newErrors })) {
      onSubmit({ values, setErrors });
    }

    setErrors(newErrors);

    setIsLoading(false);
  };

  const removeAll = useCallback((name: string) => {
<<<<<<< HEAD
    if (name === 'tags') setValues((prev) => ({ ...prev, [name]: [] }));
    else setValues((prev) => ({ ...prev, [name]: '' }));
=======
    console.log(name);
    setValues((prev) => ({ ...prev, [name]: '' }));
>>>>>>> 4daba49 (feat: 인풋 화면 구성)
  }, []);

  return {
    values,
    errors,
    setErrors,
    isLoading,
    handleChange,
    handleSubmit,
    removeAll,
    setAllState,
  };
}

export default useForm;
