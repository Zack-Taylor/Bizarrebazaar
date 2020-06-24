import React from 'react';
import './Home.scss';
import productData from '../../../helpers/data/productData';
import ProductCard from '../../shared/ProductCard/ProductCard';

class Home extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    productData.topTwentyNewest()
      .then((products) => this.setState({ products }))
      .catch((error) => console.error(error, 'error from home page'));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="Products">
        { products.map((product) => <ProductCard key={product.productId} product={product} />) }
      </div>
    );
  }
}

export default Home;
