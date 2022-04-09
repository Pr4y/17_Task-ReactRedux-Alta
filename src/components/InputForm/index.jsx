import { useState } from "react";
// Redux ---------------------------------------
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/TodoSlice";
// Style CSS ------------------------------------
import style from "./style.module.css"


const InputForm = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        id: "",
        title: "",
        completed: false,
    });

    const onChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = data.title;
        if (formIsNotEmpty) {
          const newData = {
            title: data.title,
            completed: data.completed,
          };
          dispatch(addTodo(newData));
          setData({
            title: "",
            completed: "false",
          });
        } else {
          alert("Data masih kosong");
        }
      };

    return (
        <div className={style.container}>
            <input 
            type="text" 
            name="title" 
            placeholder="Add your ToDo..." 
            value={data.title} 
            onChange={(e) => {onChange(e)}} 
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default InputForm;