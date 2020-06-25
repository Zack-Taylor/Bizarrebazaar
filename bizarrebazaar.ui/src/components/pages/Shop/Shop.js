import './Shop.scss';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import shopData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';
import ProductCard from '../../shared/ProductCard/ProductCard';

class Shop extends React.Component {
  state = {
    productTypes: [],
    product: {},
  }

  // getTopThreeProducts = (productTypeId) => {
  //   shopData.shopTopThree(productTypeId)
  //     .then((productType) => this.setState(productType))
  //     .catch((error) => console.error('error getting top three', error));
  // };

  componentDidMount() {
    productTypeData.getAllProductTypes()
      .then((response) => {
        this.setState({ productTypes: response.data });
        // this.getTopThreeProducts();
      })
      .catch((err) => console.error('error getting product types', err));
  }

  render() {
    const {
      productTypes,
      products,
    } = this.state;
    return (
      <div className="products-outer-container">
        <h1 className="product-type-name">{productTypes.name}</h1>
        <Divider></Divider>
        {/* <div className="product-card-container">
          {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
        </div> */}
      </div>
    );
  }
}

export default Shop;
