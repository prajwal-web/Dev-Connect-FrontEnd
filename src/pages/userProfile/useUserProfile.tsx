/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import securedFetch from '../../utils/securedfetch';

export const useUserProfile = () => {
  const [cookies] = useCookies(['token']);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log('profile token', cookies.token);
  useEffect(() => {
    const fetchProfile = async () => {
      if (!cookies.token) {
        setError('No token found. Please login.');
        return;
      }
      setLoading(true);
      try {
        const response = await securedFetch('http://localhost:5000/api/users/profile', {
          method: 'GET',
          token: cookies.token
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Failed to fetch profile');
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('An error occurred while fetching profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [cookies.token]);
  return { profile, loading, error };
};
