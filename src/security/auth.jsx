export const isAuthenticated = () => localStorage.getItem('token') !== null;

export const saveLoginInfo = ({token, loggedUser}) => {
  if(token){
    localStorage.setItem('token', token);
  }
}

export const logOut = () => {
  localStorage.removeItem('token');
}

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
}

export const loggedIn = () => {
  return localStorage.auth;
}
