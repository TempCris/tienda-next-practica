// ---Dependencys
import { ReactElement } from 'react';
// ---Types
import { AppProps } from 'next/app';
// ---Others
import 'Styles/index.less';
// ---Redux
import { wrapper } from '@Redux/store';
// ---Components
import { GlobalProvider } from 'GlobalProvider/GlobalProvider';

function App({ Component, pageProps }: AppProps): ReactElement {
  // --- Const, Hooks, States

  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default wrapper.withRedux(App);
