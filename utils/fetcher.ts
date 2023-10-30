export const fetcher = (url: string) =>
  fetch(url, { cache: "force-cache" }).then((res) => res.json());
