import React from 'react'

export const TodoList = ({children}:TodoListProps) => {
  return (
    <ul className='TodoList'>
        {children}
    </ul>
  )
}
