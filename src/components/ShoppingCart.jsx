import React from 'react';
import '../assets/styles/components/ShoppingCart.scss';

const ShoppingCart = ({ children, total }) => (
  <section className="shopping-cart">
    <h3>Mi Carrito</h3>
    <div className="shopping-cart__container">{children}</div>
    <hr />
    <div className="shopping-cart__details">
      <p className="details--total">{`Total: S/.${total}`}</p>
      <button className="button-finish-shopp" type="button">
        Finalizar Compra
      </button>
    </div>
  </section>
);
export default ShoppingCart;
