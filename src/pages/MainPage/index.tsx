import { observer } from 'mobx-react-lite';

import styles from './styles.module.scss';
import MainFeed from '../../components/MainFeed';

// const MOCK = [
//   {
//     id: 1,
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore sapiente velit. Dicta dolor vel, eaque tenetur ut, animi reiciendis ratione quam, ipsa molestiae assumenda pariatur accusamus est fugit deleniti!
//     Voluptatum nostrum architecto a perspiciatis placeat error voluptate, iure laborum maiores quidem neque iusto ea saepe accusantium, numquam dolorum alias delectus at officia repellat! Repellat id aperiam rem iste ab.`,
//     title: 'Post 1',
//     author: 'User 1',
//     likes: 0,
//   },
//   {
//     id: 2,
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore sapiente velit. Dicta dolor vel, eaque tenetur ut, animi reiciendis ratione quam, ipsa molestiae assumenda pariatur accusamus est fugit deleniti!
//     Voluptatum nostrum architecto a perspiciatis placeat error voluptate, iure laborum maiores quidem neque iusto ea saepe accusantium, numquam dolorum alias delectus at officia repellat! Repellat id aperiam rem iste ab.`,
//     title: 'Post 2',
//     author: 'User 2',
//     likes: 0,
//   },
//   {
//     id: 3,
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore sapiente velit. Dicta dolor vel, eaque tenetur ut, animi reiciendis ratione quam, ipsa molestiae assumenda pariatur accusamus est fugit deleniti!
//     Voluptatum nostrum architecto a perspiciatis placeat error voluptate, iure laborum maiores quidem neque iusto ea saepe accusantium, numquam dolorum alias delectus at officia repellat! Repellat id aperiam rem iste ab.`,
//     title: 'Post 3',
//     author: 'User 3',
//     likes: 0,
//   },
//   {
//     id: 4,
//     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore sapiente velit. Dicta dolor vel, eaque tenetur ut, animi reiciendis ratione quam, ipsa molestiae assumenda pariatur accusamus est fugit deleniti!
//     Voluptatum nostrum architecto a perspiciatis placeat error voluptate, iure laborum maiores quidem neque iusto ea saepe accusantium, numquam dolorum alias delectus at officia repellat! Repellat id aperiam rem iste ab.`,
//     title: 'Post 4',
//     author: 'User 4',
//     likes: 0,
//     created: '2022-01-01',
//     comments: [],
//   },
// ];

const MainPage = () => {
  return (
    <div className={styles.page}>
      <MainFeed posts={[]} />
    </div>
  );
};

export default observer(MainPage);
