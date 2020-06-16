/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get('https://localhost:44336/api/user')
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const getUserByUid = (uid) => axios.get(`https://localhost:44336/api/userId/${uid}`);

const getUserByName = (userName) => axios.get(`https://localhost:44336/api/username/${userName}`);

export {
  getAllUsers,
  getUserByUid,
  getUserByName,
};
