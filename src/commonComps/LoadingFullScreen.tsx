// ---Dependencys
import { ReactElement } from 'react';
import { SettingFilled } from '@ant-design/icons';

interface Props {
  isLoading: boolean;
}
/**
 * LoadingFullScreen Component: Componente que se muestras mientras se
 * lleva acabo la carga del componete a renderear
 * @returns {ReactElement} ReactElement
 */
function LoadingFullScreen(props: Props): ReactElement | null {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <div className="loading-screen">
        <h1>Cargando ...</h1>
        <SettingFilled spin />
      </div>
    );
  }
  return null;
}

export default LoadingFullScreen;
