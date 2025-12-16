import { createApiClient } from "./api-client";

const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api`;

export const publicApi = createApiClient({
  baseURL,
  interceptors: {
    response: async (response) => {
      return response;
    },
  },
});
