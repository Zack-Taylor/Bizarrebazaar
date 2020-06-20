import axios from 'axios';
import constants from '../constants.json';

const getAllProductTypes = () => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/producttype`)
    .then((result) => {
      const allProductTypes = result.data;
      resolve(allProductTypes);
    })
    .catch((errFromGetAllProductTypes) => reject(errFromGetAllProductTypes));
});

const getSingleProductTypeWithProducts = (id) => axios.get(`${constants.baseUrl}/producttype/productTypeId/${id}`);

const getSingleProductType = (id) => axios.get(`${constants.baseUrl}/producttype/productTypeId/${id}`);

export default { getAllProductTypes, getSingleProductTypeWithProducts, getSingleProductType };
