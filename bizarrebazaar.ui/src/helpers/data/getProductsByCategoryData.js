import axios from 'axios';
import constants from '../constants.json';

// const getProductsByCategory = (id) => new Promise((resolve, reject) => {
//   axios.get(`${constants.baseUrl}/product/productTypeId/${id}`)
//     .then((result) => resolve(result.data))
//     .catch((error) => reject(error));
// });

const getProductsByCategory = (productTypeId) => new Promise((resolve, reject) => {
  axios.get(`${constants.baseUrl}/product/productTypeId/${productTypeId}`)
    .then((result) => {
      const allProductsObj = result.data;
      const products = [];
      if (allProductsObj != null) {
        Object.keys(allProductsObj).forEach((productId) => {
          const newProduct = allProductsObj[productId];
          newProduct.id = productId;
          products.push(newProduct);
        });
      }
      resolve(products);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getProductsByCategory };
