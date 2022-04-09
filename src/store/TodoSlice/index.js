import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
    {
        id: 1,
        title: "Mengerjakan exercise",
        completed: false
    },
    {
        id: 2,
        title: "Mengerjakan assignment",
        completed: false
    },
    {
        id: 3,
        title: "Mengerjakan Summary",
        completed: false,
      },
]

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue,
      },
    reducers: {
        addTodo: (state, action) => {
            let index = state.todos[state.todos.length - 1].id;
                const newTask = { id: index + 1, ...action.payload };
                state.todos = [...state.todos, newTask];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => {
                return item.id !== action.payload;
              });
            },
        didTodos: (state, action) => {
            const newToDoList = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                  return { ...todo, completed: !todo.completed };
                }
                return todo;
              });
              state.todos = newToDoList;
            },
          }
});

export const { addTodo, deleteTodo, didTodos } = todoSlice.actions;
export default todoSlice.reducer;