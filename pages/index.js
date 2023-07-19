import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
export default function Home() {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.container}>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <div>
        <h1
          className={`underline text-red-600 ${
            page == 1 ? 'visible' : 'invisible'
          }`}
        >
          Hello world
        </h1>
      </div>
      <PaginationControl
        page={page}
        between={4}
        total={250}
        limit={20}
        changePage={(page) => {
          setPage(page);
        }}
        ellipsis={1}
      />
    </div>
  );
}
