import { TodoTypes } from "../types/types"

export const TodoItem: React.FC<TodoTypes> = ({id, titleValue, descriptionValue}) => {
    return (
        <>
            <tr>
                <td className="todoItem__row">{id}</td>  
                <td className="todoItem__row">{titleValue}</td>
                <td className="todoItem__row">{descriptionValue}</td>
                <td className="todoItem__row">
                    <input type="checkbox"/>
                </td>
            </tr> 

        </>
    )
}