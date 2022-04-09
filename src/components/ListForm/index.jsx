// Style CSS -------------------------------
import style from "./style.module.css"
//Redux ------------------------------------
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, didTodos } from "../../store/TodoSlice";

const ListForm = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    return (  
        <>
            {todos && todos.map((todo, todoIdx) => (
                <div className={style.container} key={todoIdx}>
                    <input 
                    type="checkbox" 
                    name="todo"
                    checked={todo.completed}
                    onChange={() => {
                        dispatch(didTodos(todo.id))
                    }} /> 
                     <p style={{
                            textDecoration : todo.completed ? "line-through" : "none",
                            fontStyle: todo.completed ? "italic" : "normal",
                            color: todo.completed ? "gray" : "black"}}>{todo.title}</p>           
                    <button onClick={() => {dispatch(deleteTodo(todo.id))}} >
                        Delete
                    </button>
                </div>
                
            ))}
            </>
        
    );
}
 
export default ListForm;