const useLocalStorage = () => {
  const set = (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify())

  const get = (key: string) =>
    localStorage.getItem(key)

  return {
    set,
    get,
  }
}

export {
  useLocalStorage,
}
