import { useState } from "react";
import { addNewTodo } from "../Redux/actions";
import { useDispatch } from "react-redux";


const TextField = () =>{
    
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text));

        setText('');
    
    }
    const onInputChange = (e) => {
       setText(e.target.value);
    }
        return(
        <form className="form" onSubmit={onFormSubmit}>
            <input
            placeholder="Enter new Task"
            className ="input"
            onChange={onInputChange}
            value={text}
            />
        </form>
    )
}
export default TextField;