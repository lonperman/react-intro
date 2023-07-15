import React,{FC} from "react";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

export const TodoItem:FC<TodoItemProps> = ({
  text,
  completed,
  onComplete,
  onDelete,
}: TodoItemProps) => {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete}/>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete}/>
    </li>
  );
};
