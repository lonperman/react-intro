import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    todos,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deletedTodo,
}: AppUiProps) {
    return (
        <div className="App">
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {searchedTodos.length > 0
                    ? searchedTodos.map((todo: { text: string; completed: boolean; }, index: React.Key | null | undefined) => (
                        <TodoItem
                            key={index}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completedTodo(todo.text)}
                            onDelete={() => deletedTodo(todo.text)}
                        />
                    ))
                    : todos.map((todo: { text: string; completed: boolean; }, index: React.Key | null | undefined) => (
                        <TodoItem
                            key={index}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completedTodo(todo.text)}
                            onDelete={() => deletedTodo(todo.text)}
                        />
                    ))}
            </TodoList>
            <CreateTodoButton />
        </div>
    );
}

export { AppUI };