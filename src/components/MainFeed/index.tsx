import { memo, FC } from 'react';
import AddPost from '../AddPost';
import MainPost from '../MainPost';
import styles from './styles.module.scss';

interface Props {
  posts: any[];
}

function MainFeed(props: Props) {
  return (
    <div className={styles.feedWrapper}>
      <div className={styles.addPostWrapper}>
        <AddPost />
      </div>
      <ul className={styles.feed}>
        {props.posts.map((post) => {
          return (
            <li key={post.id} className={styles.feedItem}>
              <MainPost post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(MainFeed);
