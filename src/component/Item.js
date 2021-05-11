import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import styles from './Item.module.css';
function Item({ item }) {
  const { brand, name, price, image_link, description } = item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info}>
          <strong className={styles.title}>{name}</strong>
          <strong className={styles.price}>${price}</strong>
          <strong className={styles.brand}>{brand}</strong>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}

export default Item;
