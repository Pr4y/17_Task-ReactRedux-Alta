// Components ------------------------
import FormInput from "../InputForm";
import ListForm from "../ListForm";
// Style -----------------------------
import style from "./style.module.css"

const Home = () => {
    return ( 
        <div className={style.container}>
            <h1>Todo App</h1>
            <FormInput />
            <ListForm />
        </div>
     );
}
 
export default Home;