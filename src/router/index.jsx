import React from 'react';

import Home from './../pages/Home';
import About from './../pages/About';
import CssTest from './../pages/CssTest';
import VirulScroll from './../pages/VirulScroll';

const router = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/VirulScroll',
    element: <VirulScroll />,
    name: '虚拟滚动',
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
