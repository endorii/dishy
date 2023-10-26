import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AuthLayout } from './components/AuthLayout';
import { Registration } from './view/pages/Auth/Registration/Registration';
import { Login } from './view/pages/Auth/Login/Login';
import App from './App'
import Dishes from './view/pages/Menu/Dishes/Dishes';
import Employees from './view/pages/Access/Employees/Employees';
import UserAccount from './components/UserAccount';
import { Service } from './components/Service';
// import Ingredients from './components/Ingredients';
import Residues from './view/pages/Storage/Recidues/Residues';
import Supply from './view/pages/Storage/Supply/Supply';
import Production from './view/pages/Storage/Production/Production';
import PositionsList from './view/pages/Access/Positions/PositionsList';
import { Tables } from './components/Tables';
import CashRegisters from './view/pages/Access/CashRegisters/CashRegisters';
import Genereal from './components/General';
import TablesSettings from './components/TablesSetting';
import { EmployeeAuthLayout } from './components/EmployeeAuthLayout';
import { EmployeeLogin } from './components/EmployeeLogin';
import { Orders } from './components/Orders';
import { CurrentEmployeeAccount } from './components/CurrentEmployeeAccount';
import { Sales } from './view/pages/Statistis/Sales/Sales';
import { Checks } from './view/pages/Statistis/Checks/Checks';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Registration />} />
            </Route>
            <Route path='/' element={<App />}>
                <Route path='things' element={<Dishes />} />
                {/* <Route path='ingredients' element={<Ingredients />}/> */}
                <Route path='residues' element={<Residues />} />
                <Route path='supply' element={<Supply />}/>
                <Route path='production' element={<Production />}/>
                <Route path='employees' element={<Employees />}/>
                <Route path='positions' element={<PositionsList />}/>
                <Route path='cash-registers' element={<CashRegisters />}/>
                <Route path='general' element={<Genereal />}/>
                <Route path='tables-settings' element={<TablesSettings />}/>
                <Route path='account' element={<UserAccount />}/>
                <Route path='sales' element={<Sales/>}/>
                <Route path='checks' element={<Checks/>}/>
            </Route>

            <Route path='employee/auth' element={<EmployeeAuthLayout />}>
                <Route path='login' element={<EmployeeLogin />} />
            </Route>
            <Route path='/service' element={<Service />}> 
                <Route path='tables' element={<Tables />}/>
                <Route path='orders' element={<Orders />}/>
                <Route path='account' element={<CurrentEmployeeAccount />}/>
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