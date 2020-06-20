import axios from 'axios';
import constants from '../constants.json';

const getProductTypeById = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/productType/productTypeId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default { getProductTypeById };
