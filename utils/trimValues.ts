export function trimValues<T>(values: T) {
  return Object.keys(values).reduce((acc, key) => {
    const value = values[key as keyof T];
    if (typeof value === 'string') {
      return { ...acc, [key]: value.trim() };
    }
    return { ...acc, [key]: value };
  }, {});
}
