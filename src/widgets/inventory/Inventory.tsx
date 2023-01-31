import { ProductCard, productsModel } from 'entities/products';
import React from 'react';
import styles from './styles.module.scss';

export const Inventory = () => {
  const products = productsModel.selectors.getUserProducts();
  return (
    <>
      <h2 className={styles.title}>Inventory</h2>
      <div className={styles.inventory}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};
