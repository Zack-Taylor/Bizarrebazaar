import React from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

class Product extends React.Component {
  render() {
    const { id, title, imageUrl } = this.props.product;

    return (
      <div className="Product col-3">
        <div className="productcard card">
          <div className="Products">
          <Link className="col btn btn-dark-moon btn-rounded" to={`/product/${id}`}>
          <h5 className="card-title">{title}</h5>
          <img src={imageUrl} className="card-img-top" alt=""/>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
