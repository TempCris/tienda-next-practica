// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import { HelloWorld } from 'Cont/HomeCont/HelloWorld/HelloWorld';
import { ProgressCustom } from 'Cont/HomeCont/ProgressCustom/ProgressCustom';

/**
 * HomeCont Component: Contenedor principal donde se construye todo el contenido de la pagina
 * @returns {ReactElement} ReactElement
 */
export function HomeCont(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className="HomeCont">
      <HelloWorld />
      <ProgressCustom />
    </div>
  );
}
