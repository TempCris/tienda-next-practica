import { AxiosResponse, AxiosError } from 'axios';

export declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  };
  
  module '*.png';

  module '*.css' {
    const content: Record<string, string>;
    export default content;
}

}

export type RandObj = { [s: string]: unknown; }

export type RandArray = any[] | Array<unknown>

export type AxiosHandler = AxiosError<any> | AxiosResponse<any>

export interface ResponseStandar {
  // internalError: boolean;
  response?: AxiosResponse<any>;
  error?: AxiosError<any>;
}
export type RouteAsyncMethod = () => Promise<ResponseStandar>

export interface IDParamsBody {
  id: string
}