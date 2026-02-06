import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import PostDetailPage from './pages/PostDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'posts', element: <PostsListPage /> },
      { path: 'posts/:postId', element: <PostDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;