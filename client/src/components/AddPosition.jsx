import { useState } from "react";
import { addPosition } from "./positions";
import Plus from '../assets/icons/plus.svg';
import { useDispatch } from "react-redux";
import { fetchPositions } from "../store/slices/positions.Slice";

const AddPosition = ({setOpen}) => {

    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');

    const dispatch = useDispatch();

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
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </li>
                        <li>
                            <label htmlFor="permissions" className="block text-sm font-medium text-gray-900 mb-1 ">Права та обов'язки</label>
                            <input value={permissions} onChange={(e) => setPermissions(e.target.value)} type="text" id="permissions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </li>
                    </ul>

                    <button className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 mx-[30%] px-7 py-2 text-white font-medium drop-shadow-md"
                        onClick={async() => {
                            setOpen(false); 
                            await addPosition(name, permissions); 
                            dispatch(fetchPositions());}}
                            
                            >Підтвердити
                        <img className='w-7 inline pl-2' src={Plus} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPosition;