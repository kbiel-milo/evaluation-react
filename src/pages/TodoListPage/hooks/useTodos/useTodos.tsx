interface TodosResponse {
  // Endpoint: https://dummyjson.com/todos?limit=10
  todos: {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  }[];
  total: number;
  skip: string;
  limit: number; // defines the number of todos returned
}

interface UseTodosReturn {
  data: TodosResponse | undefined;
  isLoading: boolean;  
  error: string | undefined;
}

// TODO: Implement this hook to fetch todos from the API
//
// Use the following URL to fetch the todos:
// https://dummyjson.com/todos?limit=10
//
// Requirements:
// 1. Hook should fetch todos data
// 2. Hook should support `limit` parameter to define the number of todos returned
// 3. Hook should track loading state
// 4. Hook should handle error state. It can be a simple string with an error message, no matter the cause.
export default function useTodos(): UseTodosReturn {
  return {
    data: undefined,
    isLoading: false,
    error: undefined,
  };
}
