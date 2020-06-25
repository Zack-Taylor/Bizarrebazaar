import './Shop.scss';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import productData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';
import ProductCard from '../../shared/ProductCard/ProductCard';

class Shop extends React.Component {
  state = {
    typesAndTopThree: [],
  }

  returnTopThree = (productTypeId) => {
    productData.shopTopThree(productTypeId)
      .then((response) => response.data)
      .catch((error) => console.error('error getting top three, ', error));
  }

  componentDidMount() {
    productTypeData.getAllProductTypes()
      .then((response) => {
        const objects = [];
        response.data.map((prodType) => {
          const topThree = this.returnTopThree(prodType.id);
          const typeAndThree = {
            typeName: prodType.name,
            topThreeProducts: topThree,
          };
          objects.concat(typeAndThree);
          this.setState({ typesAndTopThree: objects });
        });
      })
      .catch((err) => console.error('error getting product types', err));
  }

  render() {
    const { typesAndTopThree } = this.state;
    return (
      <div className="products-outer-container">
        <h1 className="product-type-name">{typesAndTopThree[1]}</h1>
        <Divider></Divider>
        {/* <div className="product-card-container">
          {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
        </div> */}
      </div>
    );
  }
}

export default Shop;
