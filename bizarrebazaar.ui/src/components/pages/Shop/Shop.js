import './Shop.scss';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import ShopPageSection from '../../shared/ShopPageSection/ShopPageSection';
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
      <div className="shop-page-container">
        { productsWithType.map((p) => <ShopPageSection key={p.productType} productsWithType={p} ></ShopPageSection>)}
      </div>
    );
  }
}

export default Shop;
