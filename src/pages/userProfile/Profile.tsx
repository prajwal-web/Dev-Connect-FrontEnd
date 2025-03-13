import { useUserProfile } from './useUserProfile';

const Profile = () => {
  const { profile, loading, error } = useUserProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
};

export default Profile;
