/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const getUser = () => new Promise((resolve, reject) => {
  axios.get('https://localhost:44383/api/')
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export { getUser };
