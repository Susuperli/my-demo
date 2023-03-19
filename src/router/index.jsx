import React from 'react';

import Home from './../pages/Home';
import About from './../pages/About';
import CssTest from './../pages/CssTest';

const router = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/about',
    element: <About />,
    name: 'about',
  },
  {
    path: '/CssTest',
    element: <CssTest />,
    name: 'CssTest',
  },
];

export default router;
