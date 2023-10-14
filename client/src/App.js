import { useNavigate } from 'react-router-dom';
import Account from './components/Account'
import { useEffect } from 'react';
import { auth } from './modules/auth/user';
import { useDispatch } from 'react-redux';

const App = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')

    useEffect(() => {

        dispatch(auth());

        if (!token) {
            navigate('/auth/login')
        }
    }, [token])

    return (
        <Account />
    )

}

export default App;
