import { useState, useRef } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';

import { throttle } from 'lodash';

const IMG_URL =
  'https://p3-passport.byteimg.com/img/user-avatar/30417081c4e1df53bc4e22637a02ae26~180x180.awebp';
const CELL_HEIGHT = 100;
const BUFFER_LENGTH = 5;
const TOTAL_HEIGHT = 100 * 10000;

const createDom = (item) => {
  return (
    <div className="cell" key={item} style={{ height: CELL_HEIGHT }}>
      <div className="img_container">
        <img src={IMG_URL} />
      </div>
      <div className="text_container">我是李大狗{item}</div>
    </div>
  );
};
const cteateDataList = (count = 10000) => {
  return Array.from(Array(count)).map((_, index) => {
    return index;
  });
};

const scrollDom = (list) => {
  return list.map((item) => {
    return createDom(item);
  });
};

function App() {
  const [scrollList, setScrollList] = useState(cteateDataList().slice(0, 20));

  const lastStartIndex = useRef(0);
  const containerRef = useRef();
  const topRef = useRef(0);

  const onScrollCapture = (e) => {
    const containterHeight = e.target.offsetHeight; // 容器高度
    let scrollTop = e.target.scrollTop; // 滚动距离
    let sroll_length = scrollTop / CELL_HEIGHT;

    let startIndex = Math.max(Math.floor(sroll_length) - 2, 0); // 开始的索引
    let endIndex = startIndex + Math.ceil(containterHeight / CELL_HEIGHT);

    // 结束的索引

    topRef.current = scrollTop;
    if (lastStartIndex.current > startIndex) {
      topRef.current = scrollTop - CELL_HEIGHT;
    }
    if (startIndex === 0) {
      topRef.current = 0;
    }

    if (lastStartIndex.current === startIndex) return;

    lastStartIndex.current = startIndex;

    setScrollList(cteateDataList().slice(startIndex, endIndex + 1));
  };

  return (
    <div className="App">
      <div
        className="container"
        ref={containerRef}
        onScrollCapture={throttle(onScrollCapture, 16)}
      >
        <div className="content" style={{ height: TOTAL_HEIGHT }}>
          <div style={{ height: topRef.current }} />
          {scrollDom(scrollList)}
          <div style={{ height: TOTAL_HEIGHT - topRef.current - 800 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
