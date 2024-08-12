/*
- Store -> Tempat penyimpanan state dari seluruh aplikasi, hasilnya adalah sebuah object didalamnya terdapat action dan state
- Action -> Object yang memiliki property `type` dan `payload`
- Reducer -> Fungsi yang mengambil state/rubah saat action di dispatch
- Dispatch Fn -> Fungsi untuk menjalankan tugas action
- Middleware -> Layer atau fungsi tambahan di antara dispatching action
*/

// import { createSlice, configureStore } from '@reduxjs/toolkit'

// // slice di buat masing-masing sesuai kebutuhan kalian
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     number: 0,

//     // nah kalau begini nanti ribet ya, apalagi buat reducersnya, nanti ribet bedainyanya. mending di buat slice masing-masing aja. per fitur yg di inginkan
//     todos: [],
//     products: [],
//     customers: [],
//     admin: [],
//   },
//   reducers: {
//     // counter/increment
//     increment: (state, action) => {
//       const { type, payload } = action
//       state.number += action.payload
//       // state.number = state.number + 1
//     },
//     // counter/decrement
//     decrement: (state, payload) => {
//       // state.number = payload
//       state.number = state.number - 1
//     }
//   }
// })

// // ini yg di export nanti
// // ini cara gampangnya sekarang, kita ambil dari slicenya, sudah jadi action disini
// export const { increment, decrement } = counterSlice.actions

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer
//   }
// })

// // ngecek setiap ada yg melakukan dispatch
// store.subscribe(() => {
//   console.log("🚀 ~ store.subscribe ~ store.getState:", store.getState())
// })

// // store.dispatch(increment())
// // store.dispatch(increment())
// // store.dispatch(increment())
// // store.dispatch(increment())

// // ini cara dulu untuk membuat action, kalau sekarang kan action sudah di buatkan
// store.dispatch({
//   type: 'counter/increment',
//   payload: 2
// })
// store.dispatch({
//   type: 'counter/increment',
//   payload: 2
// })
// console.log("🚀 ~ increment():", increment(100))
// store.dispatch(increment(10))


// kita comment diatas, kita coba case lain yg mendekati reactjs nanti

// kita panggil redux toolkitnya
import store from "./store.js"
import { TodoService } from "./todoService.js"

store.subscribe(() => {
  console.log("🚀 ~ store.subscribe ~ store.getState:", store.getState().todo)
})


const todoService = new TodoService()

// console.log("🚀 ~ todoService.getAllTodo():", todoService.getAllTodo())

todoService.createTodo({
  id: 1,
  title: 'Mokel',
  description: 'adnan batal puasa, astagfirullah',
  status: false

})

todoService.getById(1)
// console.log("🚀 ~ todoService.getById(1):", todoService.getById(1))

todoService.getAllTodo() // seperti ini kenapa tidak ada respon apapun. karena tidak ada perubahan yg terjadi. jadi subcribenya tidak mengirim respon
