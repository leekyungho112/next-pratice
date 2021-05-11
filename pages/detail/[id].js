import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name} 환경 입니다.
      <Item item={item} />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = process.env.apiURL;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: '740' } },
    //   { params: { id: '730' } },
    //   { params: { id: '729' } },
    // ],
    paths: data.slice(0, 10).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
