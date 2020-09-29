import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions';
import errorImage from '../assets/static/no-image-available.png';
import deleteIcon from '../assets/static/delete.png';
import '../assets/styles/components/ShoppingCartItem.scss';

const ShoppingCartItem = (props) => {
  const { id, name, image, price } = props;
  const handleDeleteProduct = (itemId) => {
    props.deleteProduct(itemId);
  };
  return (
    <div className="shop-cart-item">
      <object className="shop-cart-item__img" data={image} type="image/png">
        <img className="shop-cart-item__img" src={errorImage} />
      </object>
      <div className="shop-cart-item__details">
        <p className="details--name">{name}</p>
        <div className="details--cant">
          <p className="details--price">{`1 x ${price.amount} ${price.currency}`}</p>
          <img
            className="delete__img"
            src={deleteIcon}
            onClick={() => handleDeleteProduct(id)}
            alt="Delete Image"
          />
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(ShoppingCartItem);
