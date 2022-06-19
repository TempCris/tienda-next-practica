// ---Dependencys
import { ReactElement } from 'react';
// ---Types
import { AppProps } from 'next/app';
// ---Others
import 'Styles/index.less';
// ---Redux
import { wrapper } from '@Redux/store';

function App({ Component, pageProps }: AppProps): ReactElement {
  // --- Const, Hooks, States

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
