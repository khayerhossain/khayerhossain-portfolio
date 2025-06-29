import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <Home /> },
      { path: 'skills', element: <Home /> },
      { path: 'projects', element: <Home/> },
      { path: 'contact', element: <Home /> },
    ],
  },
]);
export default router;