declare module "axios-jsonp" {
  import { AxiosRequestConfig, AxiosPromise } from "axios";

  export default function jsonpAdapter(
    config: AxiosRequestConfig
  ): AxiosPromise;
}
