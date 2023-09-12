import { memo } from 'react';

import styles from './styles.module.scss';

interface Props {
  post: any;
}

function MainPost(props: Props) {
  return (
    <div className={styles.MainPost}>
      <h3 className={styles['MainPost-title']}>{props.post.title}</h3>
      {props.post.text}
    </div>
  );
}

export default memo(MainPost);
