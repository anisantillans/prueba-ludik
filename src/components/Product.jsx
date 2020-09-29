import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions';
import errorImage from '../assets/static/no-image-available.png';
import '../assets/styles/components/Product.scss';

const Product = (props) => {
  const { id, name, image, price } = props;
  const handleAddProduct = () => {
    props.addProduct({ id, name, image, price });
  };
  return (
    <div className="product">
      <object className="product__img" data={image} type="image/png">
        <img className="product__img" src={errorImage} />
      </object>
      <div className="product__details">
        <p className="product__details--name">{name}</p>
        <p className="product__details--price">
          {`${price.amount} ${price.currency}/${price.measureUnit}`}
        </p>
        <button
          className="button__add"
          type="button"
          onClick={handleAddProduct}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(Product);
