/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from 'react-router';
import IndexPage from '../components';
import Posts from '../components/Posts';
import ProfilePage from '../pages/userProfile/ProfilePage';

const AppRouter = ({ user }: any) => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/profile" element={<ProfilePage user={user} />} />
    </Routes>
  );
};

export default AppRouter;
