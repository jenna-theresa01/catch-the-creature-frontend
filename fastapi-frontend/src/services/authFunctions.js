// authFunctions.js

import AuthService from '../services/auth.service';

export const handleLogin = async (e, email, password, dispatch, router) => {
  e.preventDefault();
  const username = email;
  try {
    const resp = await AuthService.login(username, password);
    if (resp != undefined) {
      if (resp.access_token) {
        let data = resp;
        await dispatch({
          type: 'SET_USER',
          payload: data,
        });
        console.log('Login success');
        router.push('/');
      } else {
        console.log('Login failed');
        dispatch({ type: 'LOGOUT_USER' });
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
    dispatch({ type: 'LOGOUT_USER' });
  } finally {
    console.log('Login request completed');
  }
};
