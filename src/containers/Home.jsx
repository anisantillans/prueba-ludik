import React from 'react';
import { connect } from 'react-redux';
import ProductCatalog from '../components/ProductCatalog';
import Product from '../components/Product';
import '../assets/styles/App.scss';
import ShoppingCartItem from '../components/ShoppingCartItem';
import ShoppingCart from '../components/ShoppingCart';

const Home = ({ myList, products }) => {
  const reducerTotalPrice = (acum, myList) => acum + myList.price.amount;
  var totalPrice = myList.reduce(reducerTotalPrice, 0);
  return (
    <div className="home">
      <ProductCatalog>
        {products.length > 0 &&
          products.map((item) => <Product key={item.id} {...item} />)}
      </ProductCatalog>
      {myList.length > 0 && (
        <ShoppingCart total={totalPrice.toFixed(2)}>
          {myList.map((item) => (
            <ShoppingCartItem key={item.id} {...item} />
          ))}
        </ShoppingCart>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Home);
