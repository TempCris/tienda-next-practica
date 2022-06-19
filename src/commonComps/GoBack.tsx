// ---Dependencys
import { ReactElement } from 'react';
import Link from 'next/link';

// ----------------------------------------COMPONENT----------------------------------------
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
