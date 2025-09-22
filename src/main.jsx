import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css'
import './assets/css/fontAwesome5Pro.css'
import './assets/css/flaticon.css'
import './assets/css/default.css'
import './assets/css/style.css'
import App from './App.jsx'
import {store} from './redux/store'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
