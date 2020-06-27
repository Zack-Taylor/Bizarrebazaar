import React from 'react';
import productData from '../../../helpers/data/productData';
import ProductCard from '../ProductCard/ProductCard';
// import productTypeData from '../../../helpers/data/productTypeData';
// import userData from '../../../helpers/data/userData';

import './SearchBox.scss';

class SearchBox extends React.Component {
    state={
      products: [],
    }

    componentDidMount() {
      this.getProducts();
    }

    getProducts = () => {
      productData.getSearchProduct()
        .then((products) => this.setState({ products }))
        .catch((err) => console.error('error in get all products', err));
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

    render() {
      return (
    <div>
        <div className='searchboxDiv'>
            <input
            type='text'
            className='searchBox'
            placeholder='Search'
            onChange= {this.filterItems}
            />
        </div>
        <div>
        <div className="looks container-fluid d-flex flex-wrap">
            {this.state.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </div>
      );
    }
}

export default SearchBox;
