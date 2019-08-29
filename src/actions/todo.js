export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export const POST_TODOS_REQUEST = 'POST_TODOS_REQUEST';
export const POST_TODOS_SUCCESS = 'POST_TODOS_SUCCESS';
export const POST_TODOS_FAILURE = 'POST_TODOS_FAILURE';

export const getTodos = () => ({
  type: GET_TODOS_REQUEST,
});

export const getTodosSuccess = payload => ({
  type: GET_TODOS_SUCCESS,
  payload,
});

export const getTodosFailure = payload => ({
  type: GET_TODOS_FAILURE,
  payload: {
    error: true,
  },
});

export const postTodos = () => ({
  type: POST_TODOS_REQUEST,
});

export const postTodosSuccess = payload => ({
  type: POST_TODOS_SUCCESS,
  payload,
});

export const postTodosFailure = () => ({
  type: POST_TODOS_FAILURE,
  payload: {
    error: true,
  },
});
