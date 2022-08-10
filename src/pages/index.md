// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import { HomeCont } from 'Cont/HomeCont/HomeCont';
/**
 * Componente HomePage: este componente es para dar datos al Helmet de
 * la página y concatenarla con el contenedor de la página componente
 * @returns { ReactElement } ReactElement
 */
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
