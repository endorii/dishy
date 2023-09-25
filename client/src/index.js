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
import UserAccount from './components/UserAccount';
import { Service } from './components/Service';
import Ingredients from './components/Ingredients';
import Residues from './components/Residues';
import Supply from './components/Supply';
import Production from './components/Production';
import PositionsList from './components/PositionsList';
import { Tables } from './components/Tables';
import CashRegisters from './components/CashRegisters';
import Genereal from './components/General';
import TablesSettings from './components/TablesSetting';
import { EmployeeAuthLayout } from './components/EmployeeAuthLayout';
import { EmployeeLogin } from './components/EmployeeLogin';
import { Orders } from './components/Orders';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Registration />} />
            </Route>
            <Route path='/' element={<App />}>
                <Route path='things' element={<Things />} />
                <Route path='ingredients' element={<Ingredients />}/>
                <Route path='residues' element={<Residues />} />
                <Route path='supply' element={<Supply />}/>
                <Route path='production' element={<Production />}/>
                <Route path='employees' element={<Employees />}/>
                <Route path='positions' element={<PositionsList />}/>
                <Route path='cash-registers' element={<CashRegisters />}/>
                <Route path='general' element={<Genereal />}/>
                <Route path='tables-settings' element={<TablesSettings />}/>
                <Route path='account' element={<UserAccount />}/>
            </Route>

            <Route path='employee/auth' element={<EmployeeAuthLayout />}>
                <Route path='login' element={<EmployeeLogin />} />
            </Route>
            <Route path='/service' element={<Service />}> 
                <Route path='tables' element={<Tables />}/>
                <Route path='orders' element={<Orders />}/>
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