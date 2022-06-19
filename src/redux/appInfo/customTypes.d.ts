// ---Types
import { RandObj } from '@Declarations';

export interface ResponsiveData {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export interface Action {
  type: string;
  payload: boolean | string | RandObj | ResponsiveData;
}

export interface ReducerState {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  isLoading: boolean;
  currentPath: string;
  currentParams: RandObj
}
