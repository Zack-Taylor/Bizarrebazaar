import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
    state = {
      product: {
        id: 34,
        productTypeId: 1,
        price: 153,
        title: 'Ice Key',
        // eslint-disable-next-line max-len
        description: 'This mysterious key made entirely of ice originally had nothing to unlock, but in a land separated by space and time it is said to have opened a secret chest with a powerful magic creature inside.',
        quantity: 1,
        userId: 12,
        dateAdded: '2020-06-08T19:25:37.207',
        imageUrl: 'https://raw.githubusercontent.com/Zack-Taylor/Bizarrebazaar/master/bizarrebazaar.ui/src/assets/productImages/ice_key.png',
        isActive: true,
      },
    }

    componentDidMount() {

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
