import { useEffect } from 'react';
import Logout from '../assets/icons/logout.svg';
import { logout } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { name, phone, email, company } = useSelector(state => state.user.user)
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/auth/login')
        }
    }, [token])

    

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

            <div className='flex flex-col gap-16'>

                <div className='flex flex-raw items-center gap-[20%]'>
                    <div className='mr-2 w-32'>Ім'я акаунту: </div>
                    <input type="text" value={name} className="pl-5 block w-96 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>


                <div className='flex flex-raw items-center gap-[20%]'>
                    <div className='mr-2 w-32'>Назва компанії: </div>
                    <input type="text" value={company} className="pl-5 block w-96 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>


                <div className='flex flex-raw items-center gap-[20%]'>
                    <div className='mr-2 w-32'>Email: </div>
                    <input type="text" value={email} className="pl-5 block w-96 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

                <div className='flex flex-raw items-center gap-[20%]'>
                    <div className='mr-2 w-32'>Контактний номер телефону власника: </div>
                    <input type="text" value={"+" + phone} className="pl-5 block w-96 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>

            </div>

        </div>
    )
}

export default UserAccount;