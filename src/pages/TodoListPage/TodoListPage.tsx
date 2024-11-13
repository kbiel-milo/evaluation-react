import useTodos from "./hooks/useTodos";

export default function TodoListPage() {
  const {
    data: todosData,
    isLoading: isLoadingTodos,
    error: todosError,
  } = useTodos();

  if (isLoadingTodos) {
    return <p>Loading...</p>;
  }

  if (todosError) {
    return <p style={{
      color: "red",
    }}>{todosError}</p>;
  }

  return (
    <>
      <h1>Todos list</h1>
      <ul>
        {
          todosData?.todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
            </li>
          ))
        }
      </ul>
    </>
  );
}
