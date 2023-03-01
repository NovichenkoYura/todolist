import { useAppSelector } from "../api/hooks";
import { TodoTypes } from "../types/types";
import { TodoItem } from "./TodoItem";

// type TodoItemType = Omit<TodoTypes, 'title' | 'description'>;

export const TodoList: React.FC<TodoTypes> = () => {
  const { todoList } = useAppSelector((state) => state.todolist);
  return (
    <>
    
    {todoList.length !==0 && 

      <table className="todoTable">
        <tr>
          <th>ID</th>
          <th className="todoTable__title">TITLE</th>
          <th className="todoTable__description">DESCRIPTION</th>
          <th className="todoTable__status">STATUS</th>
        </tr>

        {todoList.map((item) => (
         
          <TodoItem
            key={item.id}
            id={item.id}
            titleValue={item.titleValue}
            descriptionValue={item.descriptionValue}
          />
        ))}
      </table>
}
    </>
  );
};
