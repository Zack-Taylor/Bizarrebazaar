import React from 'react';
import Divider from '@material-ui/core/Divider';
import productData from '../../../helpers/data/productData';
import productTypeData from '../../../helpers/data/productTypeData';
import './ProductsByCategory.scss';
import ProductCard from '../../shared/ProductCard/ProductCard';

class ProductsByCategory extends React.Component {
  state = {
    productType: {},
    products: [],
  }

  getProductData = (ProductTypeId) => {
    productData.getProductsByCategory(ProductTypeId)
      .then((products) => this.setState({ products }))
      .catch((err) => console.error('error in get products by category', err));
  }

  componentDidMount() {
    const { productTypeId } = this.props.match.params;
    productTypeData.getProductTypeById(productTypeId)
      .then((response) => {
        this.setState({ productType: response.data });
        this.getProductData(productTypeId);
      })
      .catch((err) => console.error('error in get single product type', err));
  }

  render() {
    const {
      productType,
      products,
    } = this.state;

    return (
      <div className="products-outer-container">
        <h1 className="product-type-name">{productType.name}</h1>
        <Divider></Divider>
        <div className="product-card-container">
          {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
        </div>
        <div className="color-block">a</div>
      </div>
    );
  }
}

export default ProductsByCategory;
