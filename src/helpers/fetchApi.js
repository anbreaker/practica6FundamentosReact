import {urlBackend} from './apiUrls';

export const loginApp = async (email, password) => {
  try {
    let response = await fetch(`${urlBackend}api/loginJWT`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response = await response.json();

    return response;
  } catch (error) {
    console.error();
  }
};
