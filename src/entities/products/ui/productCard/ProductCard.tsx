import cn from 'classnames';
import { Product } from 'entities/products/model/productsInitialState';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ProductCardProps {
  product: Product;
  children?: React.ReactNode;
  store?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ product, children, store }) => {
  const cardStyle = cn({
    [styles.card]: true,
    [styles.card_inventory]: !store,
  });
  const imgContainerStyle = cn({
    [styles.card__img_container]: true,
    [styles.card__img_container_inventory]: !store,
  });
  return (
    <div className={cardStyle}>
      <div className={styles.card__container}>
        <div className={imgContainerStyle}>
          <img className={styles.card__img} src={product.img} alt={product.name} />
        </div>
        {store && <p className={styles.card__title}>{product.name}</p>}
        {store ? <p>Count: {product.count}</p> : <p className={styles.card__inventory_count}>x{product.count}</p>}
        {store && <p>Price: {product.price.toFixed(2)}</p>}
        {children}
      </div>
      {!product.count && <div className={styles.card_unavailable}>Run out of stock</div>}
    </div>
  );
};
