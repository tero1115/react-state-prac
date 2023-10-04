import './App.css';
import {useEffect, useState} from "react";
import Item from "./Item";

function App() {

    const [searchValue, setSearchValue] = useState("");
    // 렌더링 될 때마다 바뀌는 변수라면
    // 렌더링 때마다 안바뀌게 하려면 state를 사용해야하고
    // 바뀌어도 상관 없으면 일반 변수를 사용한다.

    const [movieList, setMovieList] = useState([]);

    const changeSearchValue = (event) => {
        setSearchValue(prev => event.target.value);
    }

    // useEffect(실행할함수, 감지할 상태 리스트);

    useEffect(()=>{
        // console.log("통신");
        fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230930")
            .then(res => res.json())
            .then((result)=>{
                console.log(result)
                setMovieList(prev => result.boxOfficeResult.dailyBoxOfficeList)

            })
            .catch((error)=>{
                console.error(error);
            });
    } , []);

    useEffect(()=>{
        console.log("상태가 바뀜");
    } , [searchValue]);


  return (
    <div>
        <input value={searchValue} onChange={changeSearchValue} placeholder={"검색어를 입력해주세요"}/>
        <ul>
            {movieList
            .filter(el => el.movieNm.includes(searchValue))
            .map((el, index) => <Item key={index} data={el.movieNm} />)}
        </ul>
    </div>
  );
}

export default App;
