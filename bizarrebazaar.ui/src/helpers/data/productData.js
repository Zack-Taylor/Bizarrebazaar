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

const getProductsByUser = (userId) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/userId/${userId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const topTwentyNewest = (id) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/twentynewest`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

const getSearchProduct = (name) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/searchProduct/${name}`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default {
  getProductById,
  getProductsByCategory,
  topTwentyNewest,
  getProductsByUser,
  getSearchProduct,
};
