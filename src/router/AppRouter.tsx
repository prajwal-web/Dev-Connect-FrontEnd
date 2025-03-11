import { Route, Routes } from 'react-router';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import IndexPage from '../components';
import Posts from '../components/Posts';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
