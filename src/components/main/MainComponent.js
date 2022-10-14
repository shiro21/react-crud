import { useState } from "react";
import style from "../../styles/main.module.scss";

const MainContent = (mainData) => {
    const [count, setCount] = useState();
    const [title, setTtile] = useState("");
    const [contents, setContents] = useState("");
    const [update, setUpdate] = useState(false);
    
    const { data, setData } = mainData.data;

    const titleChange = (event) => {
        setTtile(event.target.value);
    }
    const contentsChange = (event) => {
        setContents(event.target.value);
    }
    
    const formData = (event) => {
        event.preventDefault();

        const newData = {
            id: data.length + 1,
            title: event.target.title.value,
            contents: event.target.contents.value
        };

        setData(oldData => [...oldData, newData]);

        event.target.title.value = "";
        event.target.contents.value = "";
    }

    const onCreate = () => {
        const newData = {
            id: data.length + 1,
            title: title,
            contents: contents
        };

        setData(oldData => [...oldData, newData]);

        setCount("")
        setTtile("");
        setContents("");
        setUpdate(false);
    };
    const onUpdate = () => {

        const arrayData = [...data];

        const newData = {
            id: count,
            title: title,
            contents: contents
        }
        for(let i = 0; i < data.length; i++) {
            console.log(data[i])
            if (count === data[i].id) {
                arrayData[i] = newData;
                break;
            };
        }
        setData(arrayData)

        setCount("")
        setTtile("");
        setContents("");
        setUpdate(false);
    }

    const updated = (item) => {
        setCount(item.id)
        setTtile(item.title);
        setContents(item.contents);
        setUpdate(true);
    };

    const deleted = (item) => {
        const newArray = [];

        for(let i = 0; i < data.length; i++) {
            if (data[i].id !== item.id) newArray.push(data[i]);
        }
        setData(newArray);
    }
    return (
        <section id={style.main_contents}>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={index} className={style.title}>
                            {item.title}
                            <span onClick={() => updated(item)}>update</span>
                            <span onClick={() => deleted(item)}>Delete</span>
                            <div>{item.contents}</div>
                        </li>
                    ))
                }
            </ul>

            <div className={style.d_f}>
                {/* Form Data로 추가하기 */}
                <form className={style.form_data} onSubmit={formData}>
                    <h1>Form Data</h1>
                    <input type="text" placeholder="hello" name="title" /> <br />
                    <textarea name="contents" /><br />

                    <button>Submit</button>
                </form>

                {/* 그냥 추가하기 */}
                <div className={style.default_data}>
                    <h1>Default Data</h1>
                    <input type="text" value={title} onChange={titleChange} /><br />
                    <textarea value={contents} onChange={contentsChange} /><br />

                    {
                        update ? <button onClick={onUpdate}>Update Submit</button> : <button onClick={onCreate}>Submit</button>
                    }
                    
                </div>
            </div>

        </section>
    );
};


export default MainContent;