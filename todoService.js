import store from './store.js'
import { add, getById, update, deleteById } from './sliceTodo.js' // import reducer

export class TodoService {
  createTodo = (todo) => {
    store.dispatch(add(todo))
  }

  getAllTodo = () => {
    return store.getState().todo.todos
  }

  getById = (id) => {
    store.dispatch(getById(id))
    return store.getState().todo.todo

  }

  updateTodo = (newTodo) => {
    store.dispatch(update(newTodo))
  }

  deleteById = (id) => {
    store.dispatch(deleteById(id))
  }
}