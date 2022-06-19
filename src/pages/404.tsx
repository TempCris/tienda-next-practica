// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import { Error404Cont } from 'Cont/Error404Cont/Error404Cont';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>Pagina no encontrada</title>
      </Head>
      <Error404Cont />
    </>
  );
}
