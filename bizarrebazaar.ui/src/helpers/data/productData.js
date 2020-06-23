import axios from 'axios';
import constants from '../constants.json';

const getProductById = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/productId/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getProductsByCategory = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/productTypeId/${id}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const topTwentyNewest = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/newest`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getProductById, getProductsByCategory, topTwentyNewest };
