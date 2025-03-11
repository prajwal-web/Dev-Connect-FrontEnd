// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';

// const useApiRequest = (url: string, method = 'GET') => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<any>(null);

//   const getData = async (options: any = {}) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const token = window.localStorage.getItem('token');
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token ? `Bearer ${token}` : '',
//           ...options.headers
//         },
//         body: method === 'POST' || method === 'PUT' ? JSON.stringify(options.body) : undefined
//       });
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }

//       const jsonData = await res.json();
//       setData(jsonData);
//     } catch (err) {
//       setError(err.message || 'Something went wrong!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, getData };
// };

// export default useApiRequest;
