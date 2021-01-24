const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    let response = await fetch(`${urlBackend}api/loginJWT`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    response = await response.json();
    console.log(response);

    if (response.auth) {
      localStorage.setItem('token', response.tokenJWT);
      onLogin(true);
      history.push('/adverts');
    } else {
      setShowError(true);
    }
  } catch (error) {
    console.error();
  }
};
