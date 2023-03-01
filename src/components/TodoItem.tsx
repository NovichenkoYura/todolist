import { TodoTypes } from "../types/types"

// type TodoItem = Omit<TodoTypes, 'title' | 'description'>;

export const TodoItem: React.FC<TodoTypes> = ({id, titleValue, descriptionValue}) => {
    // console.log(id, titleValue, descriptionValue)
    return (
        <>
            <tr>
                <td>{id}</td>  
                <td>{titleValue}</td>
                <td>{descriptionValue}</td>
                <td>
                    <input type="checkbox"/>
                </td>
            </tr> 

        {/* <div className="todoRenderItem">
            <div>{id}</div>
            <div>{titleValue}</div>
            <div>{descriptionValue}</div>
        </div> */}
        </>
    )
}