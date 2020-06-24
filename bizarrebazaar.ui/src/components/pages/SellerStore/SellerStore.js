import React from 'react';
import Divider from '@material-ui/core/Divider';
import productData from '../../../helpers/data/productData';
import userData from '../../../helpers/data/userData';
import './SellerStore.scss';
import ProductCard from '../../shared/ProductCard/ProductCard';

class SellerStore extends React.Component {
  state = {
    seller: {},
    products: [],
  }

  getProductsBySeller = (userId) => {
    productData.getProductsByUser(userId)
      .then((response) => this.setState({ products: response.data }))
      .catch((error) => console.error('error getting products, ', error));
  }

  componentDidMount() {
    const { userId } = this.props.match.params;
    userData.getUserByUid(userId)
      .then((response) => {
        this.setState({ seller: response.data });
        this.getProductsBySeller(userId);
      })
      .catch((error) => console.error('error getting user info, ', error));
  }

  render() {
    const {
      seller,
      products,
    } = this.state;
    return (
      <div className="products-outer-container">
        <h1 className="store-header">{seller.userName}'s Store</h1>
        <Divider></Divider>
        <div className="product-card-container">
          {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
        </div>
      </div>
    );
  }
}

export default SellerStore;
