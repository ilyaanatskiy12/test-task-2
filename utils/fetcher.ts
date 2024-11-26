const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchWithRetry = async (
  url: string,
  options: RequestInit = {},
  retries: number = 3,
  delay: number = 1000
) => {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      attempt += 1;
      if (attempt > retries) {
        throw new Error(`Failed after ${retries} retries: ${error.message}`);
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

export const fetcher = (
  url: string,
  options: RequestInit = {},
  retries: number = 3,
  delay: number = 1000
) => {
  const defaultOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  return fetchWithRetry(`${BASE_URL}${url}`, defaultOptions, retries, delay);
};
