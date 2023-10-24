export const getUserDataFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userData: Record<string, string> = {};

  if (token && typeof token === 'string') {
    userData.token = token;
  }

  if (role && typeof role === 'string') {
    userData.role = role;
  }

  if (Object.keys(userData).length > 0) {
    return userData;
  }

  return null;
};

export const setUserFromLocalStorage = (key: string, token: string, role: string) => {
  localStorage.setItem(key, token);
  localStorage.setItem('role', role);
};

export const removeUserFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
  localStorage.removeItem('role');
};
