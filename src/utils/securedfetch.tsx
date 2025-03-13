// eslint-disable-next-line @typescript-eslint/no-explicit-any
const securedFetch = async (url: string, options: any) => {
  return fetch(url, {
    ...options
  });
};
export default securedFetch;
