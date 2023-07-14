type TodoItemProps = {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
};

type Task = {
  text: string;
  completed: boolean;
};

type TodoListProps = {
  children: React.ReactNode;
}

type TodoCounterProps = {
  total: number;
  completed: number;
};

type AppUiProps = {
  todos: Task[];
  loading: boolean;
  error: boolean;
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchedTodos: Task[];
  completedTodo: (text: string) => void;
  deletedTodo: (text: string) => void
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void
}

