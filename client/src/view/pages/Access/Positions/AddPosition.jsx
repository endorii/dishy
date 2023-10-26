import { useState } from "react";
import { addPosition } from "./positions.js";
import { useDispatch } from "react-redux";
import { fetchPositions } from "../../../../store/slices/positions.Slice";

const AddPosition = ({ setOpen }) => {

    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');

    const [nameTouched, setNameTouched] = useState(false);
    const [permissionsTouched, setPermissionsTouched] = useState(false);

    const [nameError, setNameError] = useState('Поле не може бути пустим');
    const [permissionsError, setPermissionsError] = useState('Поле не може бути пустим');

    const dispatch = useDispatch();

    const handleName = (e) => {
        setName(e.target.value)
        const re = /^[а-яА-ЯҐґЄєІіЇїҐґa-zA-Z\s]+$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setNameError('Невірно введено назву посади');
        } else (
            setNameError('')
        )
    }

    const handlePermissions = (e) => {
        setPermissions(e.target.value);
        const re = /^[а-яА-ЯҐґЄєІіЇїҐґa-zA-Z\s,]+$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setPermissionsError('Невірно вказані права та обов`язки')
        } else (
            setPermissionsError('')
        )
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameTouched(true);
                break;
            case "permissions":
                setPermissionsTouched(true);
                break;
        }
    }

    return (
        <div className='flex justify-center '>
            <div className='absolute bg-white shadow-xl w-1/2 h-auto z-10 rounded-md mt-16'>
                <div className='flex flex-col items-center mx-3 gap-3'>
                    <span className='top-2 right-2 absolute cursor-pointer'
                        onClick={() => setOpen(false)}>✖
                    </span>
                    <span className='text-center text-2xl mt-6 font-semibold'>Ведіть дані нової посади</span>
                    <ul className='flex flex-col justify-center m-10 w-[35%] gap-3'>
                        <li>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1 ">Посада</label>
                            <input
                                value={name}
                                onChange={(e) => {handleName(e)}}
                                onBlur={(e) => blurHandler(e)}
                                name="name"
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>}
                        </li>
                        <li>
                            <label
                                htmlFor="permissions"
                                className="block text-sm font-medium text-gray-900 mb-1 ">Права та обов'язки</label>
                            <input
                                value={permissions}
                                onChange={(e) => {handlePermissions(e)}}
                                onBlur={(e) => blurHandler(e)}
                                name="permissions"
                                type="text"
                                id="permissions"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            {(permissionsTouched && permissionsError) && <div className="text-red-600">{permissionsError}</div>}
                        </li>
                    </ul>

                    <button disabled={nameError || permissionsError} className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 mx-[30%] px-7 py-2 text-white font-medium drop-shadow-md disabled:bg-green-900/20 disabled:hover:bg-green-900/20 disabled:text-gray-100 disabled:cursor-not-allowed"
                        onClick={async () => {
                            setOpen(false);
                            await addPosition(name, permissions);
                            dispatch(fetchPositions());
                        }}

                    >Підтвердити
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPosition;