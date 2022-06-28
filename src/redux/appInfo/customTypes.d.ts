// ---TYPES
import { Cases } from '@Redux/appInfo/constants';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import { CSSProperties } from 'react';

// ---------------DATA STRUCTURE ---------------
export interface ResponsiveData {
  isMovil: boolean;
  winSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
export type Colors = {
  primary: CSSProperties['color'];
  secondary: CSSProperties['color'];
  [key: string]: CSSProperties['color'];
};
// ---------------CASES ACTIONS-----------------
export interface UpdateBool {
  type: Cases.UPDATE_LOADING;
  payload: boolean;
}
export interface UpdateString {
  type: Cases.UPDATE_PATH;
  payload: string;
}
export interface UpdateResponsive {
  type: Cases.CHANGE_RESPONSIVE;
  payload: ResponsiveData;
}
export interface UpdateQuery {
  type: Cases.UPDATE_PARAMS;
  payload: NextParsedUrlQuery;
}
// ----------------- ACTION -----------------
export type Action = UpdateBool | UpdateString | UpdateResponsive;
// ----------------- REDUCER -----------------
export interface ReducerState extends ResponsiveData {
  isLoading: boolean;
  currentPath: string;
  currentParams: NextParsedUrlQuery;
  lessColors: Colors;
}
