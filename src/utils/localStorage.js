export const addUserToLocalStorage = (user) => {
  localStorage.setItem('token', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('token');
  const user = result ? JSON.parse(result) : null;
  return user;
};
