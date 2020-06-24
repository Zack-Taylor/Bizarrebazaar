import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import productData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';
import userData from '../../../helpers/data/userData';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    product: {},
    productType: {},
    seller: {},
  };

  componentDidMount() {
    const { productId } = this.props.match.params;
    this.getProductProductTypeAndSeller(productId);
  }

  getProductProductTypeAndSeller = (productId) => {
    productData
      .getProductById(productId)
      .then((result) => this.setProductAndProductTypeToState(result.data))
      .catch((error) => console.error('error getting that product, ', error));
  };

  setProductAndProductTypeToState = (product) => {
    this.setState({ product });
    this.getAndSetSeller(product.userId);
    productTypeData
      .getProductTypeById(product.productTypeId)
      .then((result) => this.setState({ productType: result.data }))
      .catch((error) => console.error('error getting that product type, ', error));
  };

  getAndSetSeller = (userId) => {
    userData
      .getUserByUid(userId)
      .then((result) => this.setState({ seller: result.data }))
      .catch((error) => console.error('error getting seller info, ', error));
  };

  render() {
    const { product, productType, seller } = this.state;
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
          <div className="filed-under-container">
          <sub className="filed-under">Filed under:</sub>
          <Tooltip title={`View all products listed as ${productType.name}`} >
            <Link style={ { textDecoration: 'none' } } to={`/productTypes/${productType.id}`}>
              <sub className="filed-under-category">{productType.name}</sub>
            </Link>
            </Tooltip>
          </div>
          <p className="description">{product.description}</p>
          <div className="sold-by-container">
            <p className="sold-by">Sold By:</p>
            <Tooltip title={`View ${seller.userName}'s Store`} >
            <Link style={ { textDecoration: 'none' } } className="sold-by-username" to={`/SellerStore/${seller.id}`}>
              {seller.userName}
            </Link>
            </Tooltip>
          </div>

          <div className="price-and-button">
            <h1 className="price">
              ${parseFloat(product.price).toLocaleString('en')}
            </h1>
            <Button
              variant="contained"
              color={`${product.quantity === 0 ? 'disabled' : 'primary'}`}
              size="large"
              className="add-to-cart-button"
            >
              {' '}
              {product.quantity === 0 ? 'Out Of Stock' : 'Add To Cart'}{' '}
            </Button>
          </div>
          <sub
            className={`stock-level ${
              product.quantity >= 5 ? 'over-five' : ''
            } ${
              product.quantity > 1
              && product.quantity < 5
              && product.quantity > 0
                ? 'few-left'
                : ''
            } ${product.quantity === 1 ? 'one-left' : ''}`}
          >
            {product.quantity >= 5 ? 'Plenty in stock.' : ''}
            {product.quantity < 5 && product.quantity > 0
              ? `Only ${product.quantity} left in stock!`
              : ''}
          </sub>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
