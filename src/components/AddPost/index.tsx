import { memo, useState, FormEvent } from 'react';
import { Button } from '../Button';
import TextInput from '../TextInput/TextInput';
import styles from './styles.module.scss';

interface Props {}

function AddPost(props: Props) {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ post, title });
  };

  return (
    <div className={styles.AddPost}>
      <form action='submit' onSubmit={handleSubmit}>
        <Button title='Add post' type='submit' viewType='filled' />
        <TextInput label='Title:' required vertical onChange={setTitle} />

        <TextInput label='Post:' required vertical onChange={setPost} multiline />
      </form>
    </div>
  );
}

export default memo(AddPost);
