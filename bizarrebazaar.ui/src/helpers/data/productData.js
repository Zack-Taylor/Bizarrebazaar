import axios from 'axios';
import constants from '../constants.json';

const getProductById = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/productId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default { getProductById };
