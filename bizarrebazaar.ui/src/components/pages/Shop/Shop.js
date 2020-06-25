import './Shop.scss';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import productData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';

class Shop extends React.Component {
  state = {
    productsWithType: [],
  }

  setDataToState = (productTypes) => {
    productTypes.map((pt) => {
      productData.shopTopThree(pt.id)
        .then((response) => this.setState({ productsWithType: [...this.state.productsWithType, { productType: `${pt.name}`, products: response.data }] }))
        .catch((error) => console.error('error getting top three, ', error));
    });
  }

  getProductsWithTypes = () => {
    productTypeData.getAllProductTypes()
      .then((response) => this.setDataToState(response.data))
      .catch((error) => console.error('error getting product types: ', error));
  }

  componentDidMount() {
    this.getProductsWithTypes();
  }

  render() {
    const { productsWithType } = this.state;
    return (
      <div className="products-outer-container">
        <h1 className="product-type-name"></h1>
        <Divider></Divider>
        {/* <div className="product-card-container">
          {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
        </div> */}
      </div>
    );
  }
}

export default Shop;
