
import { Routes, Route} from "react-router-dom"
import { AuthLayout } from './components/AuthLayout';
import { Login } from './components/Login';
import { Registration } from './components/Registration';

export default function App() {

    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>
            </Route>
        </Routes>
    )
}
