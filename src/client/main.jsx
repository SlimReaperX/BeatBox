import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Nav from './components/navigation/Nav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Nav/>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
