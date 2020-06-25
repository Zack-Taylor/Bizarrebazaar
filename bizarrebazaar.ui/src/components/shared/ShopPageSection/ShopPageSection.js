import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../ProductCard/ProductCard';
import './ShopPageSection.scss';

class ShopPageSection extends React.Component {
  render() {
    const { productsWithType } = this.props;
    return (
            <div className="shop-section-container">
               <h2 className="shop-category-name">{productsWithType.productType}</h2>
               <Divider></Divider>
               <div className="shop-product-section">
               { productsWithType.products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>) }
               <div className="view-all-icon-section">
               <Tooltip className="tooltip-on-icon" placement={'right'} title={`View all products listed as ${productsWithType.productType}`} arrow><Link style={{ textDecoration: 'none', color: 'black' }} to={`/productTypes/${productsWithType.products[0].productTypeId}`}><FontAwesomeIcon className="view-all-products-icon" icon={faArrowCircleRight}></FontAwesomeIcon></Link></Tooltip>
               </div>
               </div>
            </div>
    );
  }
}

export default ShopPageSection;
