import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

class Product extends React.Component {
  render() {
    const { productId, title, imageUrl } = this.props.product;

    return (
      <div className="Product col-3">
        <div className="productcard card">
          <div className="Products">
          <img src={imageUrl} className="card-img-top" alt=""/>
          <div className="card-body">
            <Link className="col btn btn-dark-moon btn-rounded" to={`/product/${productId}`}>View {title}</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
