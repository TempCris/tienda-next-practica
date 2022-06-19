// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import { HomeCont } from 'Cont/HomeCont/HomeCont';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>INICIO</title>
      </Head>
      <HomeCont />
    </>
  );
}
