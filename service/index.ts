import type { AsyncData, UseFetchOptions } from "#app";
const BASE_URL = "http://codercba.com:9060/oppo-nuxt/api/";

// ts类型
type Methods = "GET" | "POST";
export interface IResultData<T> {
  code: number;
  data: T;
}

class HYRequest {
  request<T = any>(
    url: string,
    methods: Methods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        ...options,
        baseURL: BASE_URL,
        method: methods,
      };

      if (methods === "GET") {
        newOptions.query = data || {}; // query 还有一个别名 params
      }
      if (methods === "POST") {
        newOptions.body = data || {};
      }

      useFetch<T>(url, newOptions as any)
        .then((res) => {
          resolve(res as AsyncData<T, Error>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "GET", params, options);
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "POST", data, options);
  }
}

export default new HYRequest();
