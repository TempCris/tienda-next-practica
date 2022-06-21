// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import { Error404Cont } from 'Cont/Error404Cont/Error404Cont';

/**
 * Error404Page Component: este componente es para dar datos al Helmet de
 * la pagina y concatenarlo con el contenedor de la pagina del componente
 * @returns { ReactElement } ReactElement
 */
export default function Error404Page(): ReactElement {
  return (
    <>
      <Head>
        <title>Pagina no encontrada</title>
      </Head>
      <Error404Cont />
    </>
  );
}
