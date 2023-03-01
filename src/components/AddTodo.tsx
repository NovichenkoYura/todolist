import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../api/hooks";
import { getTodoItem } from "../store/todoSlice";
import { v4 as uuidv4 } from 'uuid';

export const AddTodo = () =>{
    const dispatch = useAppDispatch();
    const [titleValue, setTitleValue]=useState('')
    const [descriptionValue, setDescriptionValue]=useState('')
    const { todoList } = useAppSelector((state) => state.todolist);
    const id = todoList.length + 1; 
    // array.length + 1  

    const passTodoToStore = () => {
        dispatch(getTodoItem({titleValue, descriptionValue, id}))
        setTitleValue('')
        setDescriptionValue('')
    }

    return(
    <>
     <div className="addtodo__form">
     <h1 hidden>addtodo</h1>
        <ul className="addtodo__list">
            <li className="addtodo__item">
                <h3>Title</h3>
                <input
                        type="text"
                        id="title-task"
                        placeholder="Enter title"
                        value={titleValue}
                        onChange={(e)=>setTitleValue(e.target.value)}                        
                />
            </li>
            <li className="addtodo__item">
                <h3>Description</h3>
                <input
                        type="text"
                        id="desription-task"
                        placeholder="Enter description"
                        value={descriptionValue}
                        onChange={(e)=>setDescriptionValue(e.target.value)}                           
                />
            </li>
        </ul>
        <button type="button" className="addtodo__btn" onClick={()=>passTodoToStore()}>Create</button>
    </div>
    </>)
}