import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WattPage from './pages/WattPage';
import AmperePage from './pages/AmperePage';
import VoltagePage from './pages/VoltagePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/watt",
    element: <WattPage />,
  },
  {
    path: "/ampere",
    element: <AmperePage />,
  },
  {
    path: "/voltage",
    element: <VoltagePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
