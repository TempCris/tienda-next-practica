// ---Dependencys
import { ReactElement } from 'react';
import Link from 'next/link';

/**
 * LoadingFullScreen Component: Componente de boton para regresar
 * a la pagina anterior
 * @returns {ReactElement} ReactElement
 */
export default function GoBack(): ReactElement {
  return (
    <section>
      <h2>
        <Link href="/" passHref>
          ← Back to home...
        </Link>
      </h2>
    </section>
  );
}
