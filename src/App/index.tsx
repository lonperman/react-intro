import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";


const defaultTodos: Array<Task> = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Otra", completed: false },
];


const App = () => {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [] as Task[]);
  const [searchValue, setSearchValue] = useState<string>("");

  const completedTodos = todos.filter((todo: { completed: boolean; }) => !!todo.completed).length;

  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter((todo: { text: string; }) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodo = (text:string) => {
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
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      todos={todos} 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completedTodo={completedTodo}
      deletedTodo={deletedTodo}
    />
  )
};

export default App;
