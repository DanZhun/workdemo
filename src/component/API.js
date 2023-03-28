const API_URL = "https://todoo.5xcamp.us/todos";

export const SignOutAPI = async (authorization) => {
    const _url = "https://todoo.5xcamp.us/sign_out";
    await fetch(_url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': authorization
        }
      })
      .then(res => {
        return res.json()
      })
  };