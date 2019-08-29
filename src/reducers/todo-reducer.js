import {
  GET_TODOS_FAILURE,
  GET_TODOS_SUCCESS,
  GET_TODOS_REQUEST,
  POST_TODOS_FAILURE,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
} from '../actions/todo';

const initialState = {
  loading: false,
  todos: [],
  error: false,
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        todos: [],
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        todos: [...state.todos, ...action.payload],
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case POST_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case POST_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        todos: [...state.todos, {...action.payload}],
      };
    case POST_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default todoReducer;
