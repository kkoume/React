import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Hello from "./components/sub1/Hello";
import Welcome from "./components/sub1/Welcome";
import Greeting from "./components/sub1/Greeting";
import Parent from "./components/sub2/Parent";
import Child1 from "./components/sub2/Child1";
import Child2 from "./components/sub2/Child2";
import RouterPassingData from "./components/sub3/RouterPassingData";
import root from "./router/root";

/*
  날짜 : 2024/05/02
  이름 : 조영흥
  내용 : ch05.리액트 라우터 실습

  react-router 설치
   - npm install react-router-dom
*/

function App() {
  return (
    <div className="App">
      <h3>ch05.React Router</h3>

      {/* 기본 Browser를 기반한 라우팅 */}
      <h4>React Router 기본</h4>
      <BrowserRouter>
        <p>
          <Link to="/sub1/hello">hello</Link>/
          <Link to="/sub1/welcome">Welcome</Link>/
          <Link to="/sub1/greeting">Greeting</Link>
        </p>

        <Routes>
          <Route path="/sub1/hello" element={<Hello />} />
          <Route path="/sub1/welcome" element={<Welcome />} />
          <Route path="/sub1/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>

      <h4>중첩 라우터 Outlet</h4>
      <BrowserRouter>
        <p>
          <Link to="/sub2/parent">parent</Link>/
          <Link to="/sub2/parent/child1">child1</Link>/
          <Link to="/sub2/parent/child2">child2</Link>
        </p>

        <Routes>
          <Route path="/sub2/parent" element={<Parent />}>
            <Route path="/sub2/parent/child1" element={<Child1 />} />
            <Route path="/sub2/parent/child2" element={<Child2 />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <h4>Router 데이터 전송</h4>
      <BrowserRouter>
        <RouterPassingData />
      </BrowserRouter>

      <h4>사용자 정의 라우터</h4>
      <RouterProvider router={root} />
    </div>
  );
}

export default App;
