import { useState } from 'react';
import MainContent from './MainComponent';
import style from "../../styles/main.module.scss";

const Main = () => {
    const arrayData = [
        {
            id: 1,
            title: "고정 데이터 제목",
            contents: "내용입니다."
        },
        {
            id: 2,
            title: "고정 데이터 제목",
            contents: "내용입니다."
        }
    ];
    
    const [data, setData] = useState(arrayData)
    
    return (
        <article>
            <div className='contents_wrap'>
                <div className='row'>
                    <h1 className={style.main_title}>CRUD.</h1>

                    <MainContent data={{data, setData}} />
                </div>
            </div>
        </article>
    );
}

export default Main;