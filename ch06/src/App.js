import logo from "./logo.svg";
import "./App.css";
import ContextParent from "./components/ContextParent";
import ContextUserRegister from "./components/ContextUserRegister";
import ContextUserList from "./components/ContextUserList";
import ReduxParent from "./components/ReduxParent";
import ReduxUserRegister from "./components/ReduxUserRegister";
import ReduxUserList from "./components/ReduxUserList";

/*
  날짜 : 2024/05/03
  이름 : 조영흥
  내용 : 6장 리액트 상태관리 실습
*/

function App() {
  return (
    <div className="App">
      <h3>ch06.React 상태관리</h3>

      <h4>Context API 실습</h4>
      <ContextParent />
      <ContextUserRegister />
      <ContextUserList />

      <h4>Redux(Redux Toolkit) 실습</h4>
      <ReduxParent />
      <ReduxUserRegister />
      <ReduxUserList />
    </div>
  );
}

export default App;
