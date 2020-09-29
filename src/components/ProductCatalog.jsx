import React from 'react';
import '../assets/styles/components/ProductCatalog.scss';

const ProductCatalog = ({ children }) => (
  <section className="prod-catalog">
    <h1>Productos</h1>
    <div className="prod-catalog__container">{children}</div>
  </section>
);

export default ProductCatalog;
