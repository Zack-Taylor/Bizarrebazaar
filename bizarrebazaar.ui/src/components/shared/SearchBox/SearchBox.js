import React from 'react';
import productData from '../../../helpers/data/productData';
import ProductCard from '../ProductCard/ProductCard';

import './SearchBox.scss';


class SearchBox extends React.Component {
    state={
      products: [],
    }

    componentDidMount() {
      this.getProducts();
      this.getAllProducts();
    }

    getProducts = () => {
      productData.getSearchProduct()
        .then((products) => this.setState({ products }))
        .catch((err) => console.error('error in get search products', err));
    }

    getAllProducts = () => {
      productData.getAllProducts()
        .then((products) => this.setState({ products }))
        .catch((err) => console.error('error in get search products', err));
    }
  
    filterItems = (e) => {
      const input = e.target.value;
      //   console.log('search value', input);
      if (e.target.value !== '') {
        productData.getSearchProduct(input)
          .then((products) => this.setState({ products }))
          .catch((err) => console.error('error in get all products', err));
      }
    };

    goToProductDetails = (reason, e) => {
      e.preventDefault();
      console.log(reason, e);
    }

    render() {
      const {
        products,
      } = this.state;
      return (
    <div className='searchPage'>
      <h1 className='productTitle'>Products</h1>
        <div className='searchboxDiv'>
            <input
            type='text'
            className='searchBox'
            placeholder='Search'
            onChange= {this.filterItems}
            />
        </div>
       
        <div className="looks container-fluid d-flex flex-wrap">
        {products == null ? [] : products.map((product) => <ProductCard key={product.id} product={product} />) }
          </div>
  
    </div>
      );
    }
}

export default SearchBox;
