import './App.css';
import {useState} from "react";
import Item from "./Item";

function App() {

    const [searchValue, setSearchValue] = useState("");
    // 렌더링 될 때마다 바뀌는 변수라면
    // 렌더링 때마다 안바뀌게 하려면 state를 사용해야하고
    // 바뀌어도 상관 없으면 일반 변수를 사용한다.

    const randomNumber1 = Math.random();
    const [randomNumber2] = useState(Math.random());

    const gameList = ["메이플스토리", "리그오브레전드", "서든어택", "배틀그라운드"];

    const changeSearchValue = (event) => {
        setSearchValue(prev => event.target.value);
    }

  return (
    <div>
        <div>{randomNumber1}</div>
        <div>{randomNumber2}</div>
        <input value={searchValue} onChange={changeSearchValue} placeholder={"검색어를 입력해주세요"}/>
        <ul>{gameList.filter(el => el.includes(searchValue)).map((el, index) => <Item key={index} data={el} />)}</ul>
    </div>
  );
}

export default App;
