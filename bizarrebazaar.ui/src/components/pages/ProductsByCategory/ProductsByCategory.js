import React from 'react';
import productsByCategory from '../../../helpers/data/getProductsByCategoryData';
import productTypes from '../../../helpers/data/productTypeData';
import './ProductsByCategory.scss';
import ProductDetail from '../ProductDetail/ProductDetail';

class ProductsByCategory extends React.Component {
  state = {
    productType: {},
    product: [],
  }

  getProductData = (ProductTypeId) => {
    productsByCategory.getProductsByCategory(ProductTypeId)
      .then((products) => this.setState({ products }))
      .catch((err) => console.error('error in get products by category', err));
  }

  componentDidMount() {
    const { productTypeId } = this.props.match.params;
    productTypes.getProductTypeById(productTypeId)
      .then((response) => {
        this.setState({ productType: response.data });
        this.getProductData(productTypeId);
      })
      .catch((err) => console.error('error in get single product type', err));
  }

  render() {
    const {
      productType,
      product,
    } = this.state;

    return (
      <div className="ProductsByCategory">
        <h1 className="productTypeName">{productType.name}</h1>
        <div className="products d-flex flex-wrap">
          { this.state.product.map((p) => <ProductDetail key={product.productId} product={p}/>)}
        </div>
      </div>
    );
  }
}

export default ProductsByCategory;
