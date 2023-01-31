import { ProductCard, productsModel } from 'entities/products';
import { BuyProductButton } from 'features/buyProduct';
import React from 'react';
import styles from './styles.module.scss';

export const Showcase = () => {
  const products = productsModel.selectors.getMachineProducts();
  return (
    <div className={styles.showcase}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} store>
          <BuyProductButton id={product.id} price={product.price} count={product.count} name={product.name} />
        </ProductCard>
      ))}
    </div>
  );
};
