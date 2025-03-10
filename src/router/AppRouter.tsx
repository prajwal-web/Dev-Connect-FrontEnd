import { Route, Routes } from 'react-router';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
