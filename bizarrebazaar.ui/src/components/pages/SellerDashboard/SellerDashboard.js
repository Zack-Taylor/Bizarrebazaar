import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../../../helpers/data/productData';
import userData from '../../../helpers/data/userData';

class SellerDashboard extends React.Component {
  state = {
    product: {},
    seller: {},
  }

  componentDidMount() {
    const { uid } = this.props.match.params;
    userData.getUserByUid(uid);
    productData.getProductsByUser(uid);
  }

  getSeller(uid) {
    userData.getUserByUid(uid)
      .then((result) => this.setState({ seller: result.data }))
      .catch((error) => console.error('error getting seller info', error));
  }

  getSellersProducts() {
    productData.getProductsByUser()
      .then((result) => this.setState({ product: result.data }))
      .catch((error) => console.error('error getting product info', error));
  }

  render() {
    const { product, seller } = this.state;

    return (
      <div>
        <h1 className="dashboard-header">Welcome, {}!</h1>
        <div className="dashboard">
          <img alt={seller.lastName} src={seller.firstName} className="userImage" />
          <div>
            <ul>
              <li>{product.title}</li>
              <li>{product.quantity}</li>
              <li>{product.price}</li>
            </ul>
          </div>
          <Link className="btn-btn-success" to={`/product/${product.id}`}>See Item</Link>
        </div>
      </div>
    );
  }
}

export default SellerDashboard;
