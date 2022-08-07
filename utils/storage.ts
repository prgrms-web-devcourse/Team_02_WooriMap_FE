class LocalStorage {
  static setItem<T = unknown>(key: string, value: T) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem<T = unknown, P = T>(key: string, defaultValue: P) {
    if (typeof window !== 'undefined') {
      try {
        const value = localStorage.getItem(key);
        if (!value) return defaultValue;
        return JSON.parse(value) as T;
      } catch {
        return defaultValue;
      }
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
