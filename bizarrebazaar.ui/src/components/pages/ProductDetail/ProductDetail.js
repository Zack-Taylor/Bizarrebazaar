import React from 'react';
import Button from '@material-ui/core/Button';
import productData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    product: {},
    productType: {},
  };

  componentDidMount() {
    const { productId } = this.props.match.params;
    this.getProductandProductType(productId);
  }

  getProductandProductType = (productId) => {
    productData
      .getProductById(productId)
      .then((result) => this.setProductAndProductTypeToState(result.data))
      .catch((error) => console.error('error getting that product, ', error));
  };

  setProductAndProductTypeToState = (product) => {
    this.setState({ product });
    productTypeData
      .getProductTypeById(product.productTypeId)
      .then((result) => this.setState({ productType: result.data }))
      .catch((error) => console.error('error getting that product type, ', error));
  };

  render() {
    const { product, productType } = this.state;
    return (
      <div className="image-and-details-container">
        <div className="product-image-div">
          <img
            className="product-image"
            src={product.imageUrl}
            alt={product.title}
          ></img>
        </div>
        <div className="product-details-div">
          <h1 className="product-title">{product.title}</h1>
          <sub className="filed-under">Filed under: {productType.name}</sub>
          <p className="description">{product.description}</p>
          <div className="price-and-button">
          <h1 className="price">${parseFloat(product.price).toLocaleString('en')}</h1>
            <Button variant="contained"
                  color={`${product.quantity === 0 ? 'disabled' : 'primary'}`}
                  size="large"
                  className="add-to-cart-button"
    > {product.quantity === 0 ? 'Out Of Stock' : 'Add To Cart' } </Button>
          </div>
          <sub className={`stock-level ${product.quantity >= 5 ? 'over-five' : ''} ${product.quantity > 1 && product.quantity < 5 && product.quantity > 0 ? 'few-left' : ''} ${product.quantity === 1 ? 'one-left' : ''}`}>
          {product.quantity >= 5 ? 'Plenty in stock.' : ''}{product.quantity < 5 && product.quantity > 0 ? `Only ${product.quantity} left in stock!` : ''}
          </sub>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
