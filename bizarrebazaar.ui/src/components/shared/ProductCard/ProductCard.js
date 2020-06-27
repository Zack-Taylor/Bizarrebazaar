import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const imageDivStyle = {
      backgroundImage: `url(${product.imageUrl})`,
    };

    return (
      <Paper className="product-card">
          <Link to={`/product/${product.id}`}>
          <div
            style ={imageDivStyle}
            alt={product.title}
            className="product-card-image"
          ></div>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${product.id}`}>
              <h3 className="product-card-title">{product.title}</h3>
            </Link>
          
              <h4 className="product-card-price">${parseFloat(product.price).toLocaleString('en')}</h4>
      </Paper>
    );
  }
}

export default ProductCard;
