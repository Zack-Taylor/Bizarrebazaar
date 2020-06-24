import React from 'react';
import './Home.scss';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import productData from '../../../helpers/data/productData';
import ProductCard from '../../shared/ProductCard/ProductCard';
import productTypeData from '../../../helpers/data/productTypeData';

class Home extends React.Component {
  state = {
    products: [],
    productType: [],
  }

  componentDidMount() {
    productData.topTwentyNewest()
      .then((products) => this.setState({ products }))
      .catch((error) => console.error(error, 'error from home page'));
  }

  getProductType = (productTypeId) => {
    productTypeData.getProductTypeById(productTypeId)
      .then((result) => this.setState(result.data))
      .catch((error) => console.error('error getting that product, ', error));
  };

  render() {
    const { products, productType } = this.state;
    return (

      <div className="Products">
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
  <AutoRotatingCarousel
    label='Get started'
    open={productType.open}
    onClose={() => productType({ open: false })}
    onStart={() => productType({ open: false })}
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div>
        { products.map((product) => <ProductCard key={product.productId} product={product} />) }
      </div>
    );
  }
}

export default Home;
