import { useEffect } from 'react';
import Logout from '../assets/icons/logout.svg';
import { logout } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);

    useEffect(() => {
        if (isAuth === false) {
            navigate('/auth/login')
        }
    }, [isAuth])

    return (
        <div className='flex flex-col' >
            <div className="flex justify-between ">
                <h2 className="text-3xl font-medium">Інформація про аккаунт</h2>
                <button className="flex items-center bg-red-500 hover:bg-red-600 rounded-lg px-7 py-2 text-white font-medium drop-shadow-md"
                    onClick={() => dispatch(logout())}>Вийти
                    <img className='w-7 inline pl-2' src={Logout} alt="" />
                </button>
            </div>
            <hr className='border-t-1 border-slate-300 my-10' />

            <div>
                {/* Add some information aboute account:
                    - date of creation \t
                    - account editing functionality */}
            </div>

        </div>
    )
}

export default UserAccount;