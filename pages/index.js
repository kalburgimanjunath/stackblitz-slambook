import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <h1 className="underline text-red-100">Hello world</h1>
    </div>
  );
}
