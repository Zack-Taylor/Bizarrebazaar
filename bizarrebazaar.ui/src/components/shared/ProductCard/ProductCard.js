import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;

    return (
            <div className="card-outer">
                <div className="product-image" style ={ {
                  backgroundImage: `url(${product.imageUrl})`,
                } }></div>
                <p className='product-title'>{product.title}</p>
            </div>
    );
  }
}

export default ProductCard;
