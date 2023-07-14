import React, { FC, createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

type PropsContext = {
    children: React.ReactNode
}

const TodoContext = createContext<AppUiProps>({} as AppUiProps);


const TodoProvider:FC<PropsContext> = ({children}) =>{
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [] as Task[]);
      const [searchValue, setSearchValue] = useState<string>("");
      const [openModal, setOpenModal] = useState<boolean>(false);
    
      const completedTodos = todos.filter((todo: { completed: boolean; }) => !!todo.completed).length;
    
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((todo: { text: string; }) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    
      const completedTodo = (text: string) => {
        const newTodos: Task[] = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deletedTodo = (text: string) => {
        const newTodos: Task[] = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

      return(
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodo,
            deletedTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
      )
}

export {TodoProvider, TodoContext}