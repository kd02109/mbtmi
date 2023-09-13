import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { reset } from '@/css/reset';
import { routers } from '@/routers/routers.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <RouterProvider router={routers} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
