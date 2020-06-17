/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseUrl = 'https://localhost:44336/api';

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const getUserByUid = (uid) => axios.get(`${baseUrl}/userId/${uid}`);

const getUserByName = (userName) => axios.get(`${baseUrl}/username/${userName}`);

export {
  getAllUsers,
  getUserByUid,
  getUserByName,
};
