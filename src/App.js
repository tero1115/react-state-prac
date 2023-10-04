import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // useState 리액트에서 상태를 관리하는 함수
    // 리턴값은 배열이고
    // 배열의 첫번째 요소는 값
    // 배열의 두번째 요소는 값을 변경하는 함수
    // useState의 매개변수는 값의 초기값

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
        // setCount(count + 1);
    }

  return (
    <div>
        <div>{count}</div>
        <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
