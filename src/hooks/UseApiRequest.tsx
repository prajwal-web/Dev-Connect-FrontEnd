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
