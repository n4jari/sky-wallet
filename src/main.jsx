import ReactDOM from 'react-dom/client'
import './index.css'
import { routers } from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { ToastContainer } from 'react-toastify'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
    <ToastContainer position='bottom-right' theme="dark" rtl />
  </Provider>
)
