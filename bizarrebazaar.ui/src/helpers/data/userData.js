import axios from 'axios';

const baseUrl = 'https://localhost:44336/api';

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user/userId/${uid}`)
    .then((result) => resolve(result))
    .catch((error) => reject(error));
});

// const getUserByName = (userName) => axios.get(`${baseUrl}/username/${userName}`);

export default { getUserByUid };
