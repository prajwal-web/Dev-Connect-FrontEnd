/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { useUserProfile } from '../userProfile/useUserProfile';
// import API_KEYS from '../../components/core/keys';

export const useLogin = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  console.log('profile ' + profile);

  const [cookies, setCookie] = useCookies(['token']);
  console.log(cookies);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // const response = await fetch(`${import.meta.env.VITE_HOST_URL}${API_KEYS.login}}`, {
      const response = await fetch('https://dev-connect-service.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const jsonData = await response.json();
      if (response.ok && jsonData.token) {
        setCookie('token', jsonData.token);
        navigate('/posts', { state: jsonData.token });
        return jsonData;
      } else {
        setError(jsonData.message || 'Login failed. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};
