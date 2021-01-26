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
    console.error('Error:', error);
  }
};

export const showAdvertPageById = async (id, token) => {
  try {
    let response = await fetch(`${urlBackend}api/ads/${id}?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) return await response.json();

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const deleteAdById = async (urlToDelete) => {
  try {
    let response = await fetch(`${urlBackend}${urlToDelete}`, {method: 'DELETE'});
    response = await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
