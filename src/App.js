import './App.css';
import {useState} from "react";
import Item from "./Item";

function App() {

    const [searchValue, setSearchValue] = useState("");

    const gameList = ["메이플스토리", "리그오브레전드", "서든어택", "배틀그라운드"];

    const changeSearchValue = (event) => {
        setSearchValue(prev => event.target.value);
    }

  return (
    <div>
        <input value={searchValue} onChange={changeSearchValue} placeholder={"검색어를 입력해주세요"}/>
        <ul>{gameList.filter(el => el.includes(searchValue)).map((el, index) => <Item key={index} data={el} />)}</ul>
    </div>
  );
}

export default App;
