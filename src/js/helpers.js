export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
}
