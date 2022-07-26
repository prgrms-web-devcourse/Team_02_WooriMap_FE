import { useState, useCallback, useContext } from 'react';
import { trimValues } from 'utils';
import { IOnSubmit, IPostOnChangeProps, ISetValueState } from 'types';
import { ToastContext } from 'context/ToastContext';

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
  const [isChanged, setChanged] = useState<boolean>(false);
  const { createToast } = useContext(ToastContext);

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
    setChanged(true);
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

    if (Object.values(newErrors).every((x) => !x)) {
      onSubmit({ values: trimValues(values) as T, setErrors });
    } else {
      createToast({
        status: 'fail',
        message: '필수 항목을 입력해주세요.',
        duration: 3000,
      });
    }

    setErrors(newErrors);

    setIsLoading(false);
  };

  const removeAll = useCallback((name: string) => {
    if (name === 'tags') setValues((prev) => ({ ...prev, [name]: [] }));
    else setValues((prev) => ({ ...prev, [name]: '' }));
  }, []);

  return {
    values,
    errors,
    setErrors,
    isLoading,
    isChanged,
    handleChange,
    handleSubmit,
    removeAll,
    setAllState,
  };
}

export default useForm;
