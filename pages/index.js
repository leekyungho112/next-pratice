import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Head>
        <title>Home | Developer</title>
      </Head>

      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 12)} />

        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(12)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiURL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
