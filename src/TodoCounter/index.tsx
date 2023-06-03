import React from "react";


export const TodoCounter = ({ total, completed }: TodoCounterProps) => {
  return (
    <h1 className="TodoCounter">
      {completed === total ? (
        <span>¡Completaste todos los TODOS!</span>
      ) : (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </>
      )}
    </h1>
  );
};
