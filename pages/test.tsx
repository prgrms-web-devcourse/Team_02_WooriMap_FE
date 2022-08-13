import { useToast } from 'hooks/useToast';

export default function Test() {
  const { createToast } = useToast({
    top: 10,
    right: 0,
  });

  const onSuccess = () => {
    createToast({
      message: 'Hello World',
      status: 'success',
      duration: 3000,
    });
  };

  const onFail = () => {
    createToast({
      message: 'Hello World',
      status: 'fail',
      duration: 3000,
    });
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={onSuccess} type="button">
        성공
      </button>
      <button onClick={onFail} type="button">
        실패
      </button>
    </div>
  );
}
