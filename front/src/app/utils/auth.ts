export const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem('token');
  };
  
  export const removeToken = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  };
  