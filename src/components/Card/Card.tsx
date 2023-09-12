import * as React from 'react';
import styles from './styles.module.scss';

interface ICardProps {
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div className={styles.card} style={props.style}>
      {!!props.title && <h2 className={styles.title}>{props.title}</h2>}
      {props.children}
    </div>
  );
};

export default Card;
