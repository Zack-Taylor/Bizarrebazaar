import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import productData from '../../../helpers/data/productData';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  state = {
    product: {},
  }

  componentDidMount() {
    this.setProductToState(26);
  }

    setProductToState = (productId) => {
      productData.getProductById(productId)
        .then((result) => this.setState({ product: result.data }))
        .catch((error) => console.error('error getting that product', error));
    }

    render() {
      const { product } = this.state;
      return (
            <Container maxWidth="md">
                <h3 className="product-title-header">{product.title}</h3>
                <Divider />
                <img className="product-image" src={product.imageUrl} alt={product.title}></img>
                <ul>
                    <li>{product.description}</li>
                    <li>Price: {product.price}</li>
                    <li>Quantity in stock: {product.quantity}</li>
                </ul>
          </Container>
      );
    }
}

export default ProductDetail;
