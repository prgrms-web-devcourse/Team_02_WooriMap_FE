class LocalStorage {
  static setItem<T = unknown>(key: string, value: T) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem<T = unknown>(key: string, defaultValue: T) {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key);
      if (!value || value === 'undefined') return defaultValue;
      return JSON.parse(value) as T;
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}

export default LocalStorage;
