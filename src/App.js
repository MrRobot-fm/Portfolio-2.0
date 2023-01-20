import { useEffect } from 'react';
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/:title" element={<ProjectDetails />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
