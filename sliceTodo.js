import { createSlice } from '@reduxjs/toolkit'

export const sliceTodo = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    // seleted buat edit todonya nanti
    todo: null,
  },
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload)

    },
    getById: (state, { payload }) => {
      const todo = state.todos.find(todo => +todo.id === +payload)
      state.todo = todo
      // nah kalau enggak ada yaudah undifined, enggak usah kita kasih validasi disini.
      // validasinya nanti waktu kita mainan sama API
    },
    update: (state, { payload }) => {
      // const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      // cara lain
      state.todos = state.todos.map(todo => {
        if (todo.id === payload.id) {
          return { ...payload }
        }
        return todo
      })

    },
    deleteById: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { add, getById, update, deleteById } = sliceTodo.actions