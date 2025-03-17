/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const FetchUserData = async (token: string) => {
  const response = await fetch('https://dev-connect-service.onrender.com/api/users/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error('Error fetching user data:', errorResponse);
    throw new Error(errorResponse.message || 'Failed to fetch user data');
  }

  return await response.json();
};

export const updateUserDataInServer = async (values: any, token: string) => {
  try {
    console.log('Values being sent to server:', values);
    const response = await fetch('https://dev-connect-service.onrender.com/api/users/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in updating user data:', error);
    throw error;
  }
};
