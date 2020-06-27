import React from 'react';
import './SellerDashboard.scss';
import productData from '../../../helpers/data/productData';
import userData from '../../../helpers/data/userData';
import ProductCard from '../../shared/ProductCard/ProductCard';

class SellerDashboard extends React.Component {
  state = {
    products: [],
    seller: {},
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getSeller(id);
    this.getSellersProducts(id);
  }

  getSeller(id) {
    userData.getUserByUid(id)
      .then((result) => this.setState({ seller: result.data }))
      .catch((error) => console.error('error getting seller info', error));
  }

  getSellersProducts(userId) {
    productData.getProductsByUser(userId)
      .then((result) => this.setState({ products: result.data }))
      .catch((error) => console.error('error getting product info', error));
  }

  render() {
    const { products, seller } = this.state;

    return (
      <div className="page">
        <h1 className="dashboard-header">Welcome, {seller.firstName}!</h1>
        <div className="dashboard">
          <img alt={seller.lastName} src={seller.imageUrl} className="dashboardImage" />
            <ul className="sellerData">
              <li>{}</li>
              <li>{}</li>
              <li>{}</li>
            </ul>
        </div>
          <div>
          <div className="Products">
            { products.map((product) => <ProductCard key={product.productId} product={product} />) }
          </div>
          </div>
      </div>
    );
  }
}

export default SellerDashboard;
