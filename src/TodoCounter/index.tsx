import React, { FC, useContext } from "react";
import { TodoContext } from "../TodoContext";


export const TodoCounter:FC = () => {
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
