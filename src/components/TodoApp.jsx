import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    totalCount,
    pendingTotalCount,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {totalCount}
        <small>, pending: {pendingTotalCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4> Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
