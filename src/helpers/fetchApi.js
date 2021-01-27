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

export const showAdvertsList = async (token) => {
  try {
    let response = await fetch(`${urlBackend}api/ads?limit=50&token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    if (response.status === 200) return response.json();

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

    if (response.status === 200) return response.json();

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const showAdvertsByFilters = async (params) => {
  try {
    let response = await fetch(`${urlBackend}api/ads?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) return response.json();

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createNewAdvert = async (token, form) => {
  try {
    let response = await fetch(`${urlBackend}api/ads?token=${token}`, {
      method: 'POST',
      body: form,
    });
    response = await response.json();

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const deleteAdById = async ({id, token}) => {
  try {
    await fetch(`${urlBackend}api/ads/${id}?token=${token}`, {method: 'DELETE'});
  } catch (error) {
    console.error('Error:', error);
  }
};

// pensar como hacer el response...
// const myFetch = (url, token) => {
//   return fetch(`${url}&token=${token}`).then(response => response.json())
// }
