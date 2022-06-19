// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Progress } from 'antd';
// ---Redux
/* import { useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';
 */
/**
 * ProgressCustom Component: Check the colors in redux and customize the progress bar
 * @returns {ReactElement}
 */
export function ProgressCustom(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // const { lessColors } = useSelector((s: FullReduxState) => s.appInfoReducer);
  // -----------------------RENDER
  return (
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068'
      }}
      percent={67}
      status="active"
    />
  );
}
