export const checkStateIsValid = <T>({ errorState }: { errorState: T }) => {
  return Object.values(errorState).every((x) => !x);
};
