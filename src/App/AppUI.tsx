import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {
    return (
        <div className="App">
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    todos,
                    searchedTodos,
                    completedTodo,
                    deletedTodo,
                    openModal,
                    setOpenModal,
                }) => (
                    <>
                        <TodoList>
                            {loading &&
                                <>
                                    <TodosLoading />
                                    <TodosLoading />
                                    <TodosLoading />
                                </>
                            }
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length == 0) && <EmptyTodos />}
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
                        {openModal && (
                            <Modal>
                                La funcionalidad de agregar TODO
                            </Modal>
                        )}
                    </>
                )}
            </TodoContext.Consumer>

        </div>
    );
}

export { AppUI };