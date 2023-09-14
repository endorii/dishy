import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AuthLayout } from './components/AuthLayout';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import App from './App'
import Things from './components/Things';
import Employees from './components/Employees';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/auth' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Registration/>}/>
        </Route>
        <Route path='/' element={<App/>}>
            <Route path='things' element={<Things/>}/>
            <Route path='employees' element={<Employees/>}/>
        </Route>
        </>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);