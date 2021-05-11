import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styles from './ItemList.module.css';
import Link from 'next/link';
function ItemList({ list }) {
  return (
    <div>
      <Grid columns={4}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a className={styles.item_link}>
                  <div className={styles.wrap}>
                    <Image src={item.image_link} className={styles.img_item} />
                    <strong className={styles.title_item}>{item.name}</strong>
                    <span className={styles.info_item}>
                      {item.category}-{item.product_type}
                    </span>
                    <strong className={styles.price_item}>${item.price}</strong>
                    <strong className={styles.rating_item}>
                      {`구매평점 ${item.rating === null ? 0 : item.rating}`}/5
                    </strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
