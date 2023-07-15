import React, { FC, ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const CreateTodoButton:FC<Props> = ({...buttonProps}) => {
  return (
    <button
      className="CreateTodoButton"
      {...buttonProps}
    >
      +
    </button>
  );
};
