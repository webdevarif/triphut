import { useState } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import Hero from 'src/components/Home/Hero';
import MainLayout from 'src/layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <>
    <MainLayout>
      <Head>
        <title>Trip Hut NextJs Template</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
    </MainLayout>
    </>
  );
};

export default Home;
