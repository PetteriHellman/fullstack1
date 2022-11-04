import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)



// const promise = axios.get('http://localhost:3001/db').then(response => {
//     const notes = response.data
//     console.log(response)
// })
// console.log(promise)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

