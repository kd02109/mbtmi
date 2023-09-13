import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import NotFound from '@/page/NotFound';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
]);
