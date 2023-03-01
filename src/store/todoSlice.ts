import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  title: string;
  description: string;
  id: number;
}

interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: []  
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    getTodoItem(state, action) {
      console.log(action.payload)
      state.todoList.push(action.payload)
      // state.goodsFilteredByBrandsArr.includes(action.payload)
      //   ? (state.goodsFilteredByBrandsArr = state.goodsFilteredByBrandsArr.filter(
      //       (item: any) => item !== action.payload
      //     ))
      //   : state.goodsFilteredByBrandsArr.push(action.payload);
    }
  }
});

export const {getTodoItem} = todoSlice.actions;
export default todoSlice.reducer;
