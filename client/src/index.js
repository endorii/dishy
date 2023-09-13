import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AuthLayout } from './components/AuthLayout';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { Account } from './components/Account';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/auth' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Registration/>}/>
        </Route>
        <Route path='/' element={<Account/>}/>
        </>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);