import { Route, Routes } from 'react-router';
import IndexPage from '../components';
import Posts from '../components/Posts';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
