import React from 'react';
import { Space } from 'antd';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

import router from './router/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Space>
          {router.map(({ path, name }) => {
            return (
              <Link to={path} key={name}>
                {name}
              </Link>
            );
          })}
        </Space>

        <div style={{ margin: '30px auto', width: 1000 }}>
          <Routes>
            {router.map(({ path, element }) => {
              return <Route path={path} element={element} key={path} />;
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
