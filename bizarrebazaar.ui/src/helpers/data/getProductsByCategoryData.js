import axios from 'axios';
import constants from '../constants.json';

const getProductsByCategory = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/productTypeId/${id}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getProductsByCategory };
