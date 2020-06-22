import React from 'react';
import Paper from '@material-ui/core/Paper';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const imageDivStyle = {
      backgroundImage: `url(${product.imageUrl})`,
    };

    return (
      <Paper className="product-card">
          <div
            style ={imageDivStyle}
            alt={product.title}
            className="product-card-image"
          ></div>
        <h3 className="product-card-title">{product.title}</h3>
        <h4 className="product-card-price">${parseFloat(product.price).toLocaleString('en')}</h4>
      </Paper>
    );
  }
}

export default ProductCard;
