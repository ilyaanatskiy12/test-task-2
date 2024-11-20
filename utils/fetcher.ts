const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetcher = (url: string) => {
  return fetch(`${BASE_URL}${url}`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });
};
