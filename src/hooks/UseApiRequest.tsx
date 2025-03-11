/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const useApiRequest = (url: string, method = 'GET') => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async (options: any = {}) => {
    setLoading(true);
    const token = window.localStorage.getItem('token');
    const res = await fetch(url, {
      method,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  const deleteData = async () => {
    const token = window.localStorage.getItem('token');
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      return true;
    } else {
      const error = await res.json();
      throw new Error(error.message || 'Failed to delete employee');
    }
  };

  return { data, loading, getData, deleteData };
};

export default useApiRequest;

// import { useState } from 'react';
// import { Cookies, useCookies } from 'react-cookie';

// const useApiRequest = (url: string, method = 'POST') => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [cookie, setCookie] = useCookies(['name']);
//   console.log(cookie);

//   const getData = async (body: any) => {
//     setLoading(true);
//     const token = Cookies.get('name');
//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(body)
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setData(data);
//       } else {
//         setError(data.message || 'Something went wrong.');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again later.');
//     }
//     setLoading(false);
//   };

//   return { data, loading, error, getData };
// };

// export default useApiRequest;
