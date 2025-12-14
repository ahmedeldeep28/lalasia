import { stringify } from "qs";

export interface ApiRequestOptions extends RequestInit {
  params?: object;
}

type RequestInterceptor = (config: ApiRequestOptions) => Promise<ApiRequestOptions>;

type ResponseInterceptor = (response: Response) => Promise<Response>;

interface ApiClientConfig {
  baseURL?: string;
  headers?: Record<string, string>;
  interceptors?: {
    request?: RequestInterceptor;
    response?: ResponseInterceptor;
  };
}

export function createApiClient(config: ApiClientConfig) {
  const { baseURL = "", headers = {}, interceptors } = config;

  function serializeBody(options: ApiRequestOptions): ApiRequestOptions {
    if (!options.body) return options;

    return {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };
  }

  function buildQueryString(params?: object): string {
    if (!params) return "";

    return `?${stringify(params)}`;
  }

  async function callApi<T>(url: string, options: ApiRequestOptions = {}): Promise<T> {
    const requestURL = baseURL + url +  buildQueryString(options.params);

    let ApiRequestOptions: ApiRequestOptions = {
      ...options,
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
    };

console.log(requestURL)
    ApiRequestOptions = serializeBody(ApiRequestOptions);

    // Apply request interceptor
    if (interceptors?.request) {
      ApiRequestOptions = await interceptors.request(ApiRequestOptions);
    }

    try {
      let response: Response;

      response = await fetch(requestURL, {
        ...ApiRequestOptions,
      });

      // Apply response interceptor
      if (interceptors?.response) {
        response = await interceptors.response(response);
      }

     if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(JSON.stringify(errorBody));
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  return callApi;
}
