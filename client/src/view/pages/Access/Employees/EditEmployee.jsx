import { useEffect, useState } from "react";
import { editEmployee } from "./employee";
import Plus from '../../../../assets/icons/plus.svg';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../../../store/slices/employeesSlice";

const EditEmployee = ({ setOpen, currentEmployee }) => {

    const [id, setId] = useState(currentEmployee._id);
    const [name, setName] = useState(currentEmployee.name);
    const [login, setLogin] = useState(currentEmployee.login);
    const [pin, setPin] = useState(currentEmployee.pin);
    const [position, setPosition] = useState(currentEmployee.position);

    const [nameTouched, setNameTouched] = useState(false);
    const [loginTouched, setLoginTouched] = useState(false);
    const [pinTouched, setPinTouched] = useState(false);
    const [positionTouched, setPositionTouched] = useState(false);

    const [nameError, setNameError] = useState('Поле не може бути пустим');
    const [loginError, setLoginError] = useState('Поле не може бути пустим');
    const [pinError, setPinError] = useState('Поле не може бути пустим');
    const [positionError, setPositionError] = useState('Поле не може бути пустим');

    const { positions } = useSelector(state => state.positions)

    const dispatch = useDispatch();

    const handleName = (e) => {
        setName(e.target.value);
        const re = /^[а-яА-ЯҐґЄєІіЇїҐґa-zA-Z\s]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Невірно введено Ім`я')
        } else {
            setNameError('')
        }
    }

    const handleLogin = (e) => {
        setLogin(e.target.value);
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setLoginError('Невірно веедено логін ')
        } else {
            setLoginError('')
        }
    }

    const handlePin = (e) => {
        setPin(e.target.value);
        const re = /^\d{4}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPinError('Невірно веедено пінкод')
        } else {
            setPinError('')
        }
    }

    const handlePosition = (e) => {
        setPosition(e.target.value);
        const re = /^[а-яА-ЯҐґЄєІіЇїҐґa-zA-Z\s]+$/
        if (!re.test(String(position))) {
            setPositionError('Невірно веедено посаду')
        } else {
            setPositionError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameTouched(true);
                break;
            case 'login':
                setLoginTouched(true);
                break;
            case 'pin':
                setPinTouched(true);
                break;
            case 'position':
                setPositionTouched(true);
                break;
        }
    }

    useEffect(() => {
        if (position) {
            setPositionError('');
        }
        if (name) {
            setNameError('');
        }
        if (pin) {
            setPinError('');
        }
        if (login) {
            setLoginError('');
        }
    }, []);
    

    return (
        <div className='flex justify-center '>
            <div className='absolute bg-white shadow-xl w-1/2 h-auto z-10 rounded-md mt-16'>
                <div className='flex flex-col items-center mx-3 gap-3'>
                    <span className='top-2 right-2 absolute cursor-pointer'
                        onClick={() => setOpen(false)}>✖
                    </span>
                    <span className='text-center text-2xl mt-6 font-semibold'>Змінити дані працівника</span>
                    <ul className='flex flex-col justify-center m-10 w-[35%] gap-3'>
                        <li>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-900 mb-1 ">Ім'я</label>
                            <input
                                value={name}
                                onChange={(e) => handleName(e)}
                                name="name"
                                onBlur={(e) => {blurHandler(e)}}
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>}
                        </li>
                        <li>
                            <label
                                htmlFor="login" className="block text-sm font-medium text-gray-900 mb-1 ">Логін</label>
                            <input
                                value={login} 
                                onChange={(e) => handleLogin(e)}
                                onBlur={(e) => {blurHandler(e)}}
                                name="login"
                                type="text"
                                id="login"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {(loginTouched && loginError) && <div className="text-red-600">{loginError}</div>}
                        </li>
                        <li>
                            <label
                                htmlFor="pin"
                                className="block text-sm font-medium text-gray-900 mb-1 ">ПІН-код</label>
                            <input
                                value={pin}
                                onChange={(e) => {handlePin(e)}}
                                onBlur={(e) => {blurHandler(e)}}
                                name="pin"
                                type="text"
                                id="pin"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {(pinTouched && pinError) && <div className="text-red-600">{pinError}</div>}
                        </li>
                        <li>
                            <label
                                htmlFor="positions"
                                className="block text-sm font-medium text-gray-900 mb-1 ">Посада</label>
                            <select
                                id='positions'
                                value={position}
                                name="position"
                                onChange={(e) => handlePosition(e)}
                                onBlur={(e) => {blurHandler(e)}}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
                                {positions.map((position, i) => {
                                    return <option key={i} value={position.name}>{position.name}</option>
                                })}
                            </select>
                            {(positionTouched && positionError) && <div className="text-red-600">{positionError}</div>}
                        </li>
                    </ul>

                    <button disabled={nameError || loginError || pinError || positionError} className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 mx-[30%] px-7 py-2 text-white font-medium drop-shadow-md disabled:bg-green-900/20 disabled:hover:bg-green-900/20 disabled:text-gray-100 disabled:cursor-not-allowed"
                        onClick={async () => {
                            setOpen(false);
                            await editEmployee(id, name, login, pin, position);
                            dispatch(fetchEmployees());
                        }}

                    >Підтвердити
                        <img className='w-7 inline pl-2' src={Plus} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee;