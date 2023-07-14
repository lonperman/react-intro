import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";


export const TodoCounter = () => {
  const {completedTodos,totalTodos} = useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      {completedTodos === totalTodos ? (
        <span>¡Completaste todos los TODOS!</span>
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      )}
    </h1>
  );
};
