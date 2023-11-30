import { useEffect, useState } from "react";
import Delete from '../assets/icons/delete.svg';
import { NumPadWelcomeModal } from "./NumPadWeclomeModal";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { foundEmployee } from "../view/pages/Access/Employees/employee";
import { fetchOnlineEmployees } from "../store/slices/onlineEmployee.Slice";

export const NumberPad = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [pinInput, setPinInput] = useState('');
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState({});

    const dispatch = useDispatch()

    const handleClick = (number) => {
        console.log(`Кнопка ${number} натиснута`);
        if (pinInput.length < 4) {
            setPinInput(prevState => prevState + `${number}`);
        }
    }

    const clearPad = () => {
        setPinInput('');
    }

    useEffect(() => {
        dispatch(fetchOnlineEmployees());
    }, [])

    return (
        <>
            {open ?
                <NumPadWelcomeModal setOpen={setOpen} employee={employee} setEmployee={setEmployee}/>
                : null}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light" />
            <div className="flex justify-center m-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <input className="w-full h-20 bg-gray-400/10 rounded-lg text-center font-bold text-white text-6xl" type="password" value={pinInput} onChange={(e) => setPinInput(e.target.value)} />
            </div>

            <div className="flex flex-wrap justify-center text-white gap-y-5 gap-x-10">
                {numbers.map((number) => (
                    <button key={number} onClick={() => handleClick(number)} className="w-1/4 text-center bg-gray-400/10 w-24 h-24 text-2xl hover:bg-gray-400/30 ">
                        {number}
                    </button>
                ))}
                <button onClick={() => clearPad()} className="w-1/2 text-center bg-red-400/10 w-24 h-24 text-2xl hover:bg-red-400/30">
                    <img className="ml-5 h-12" src={Delete} alt="" />
                </button>
                <button onClick={() => handleClick(0)} className="w-1/2 text-center bg-gray-400/10 w-24 h-24 text-2xl hover:bg-gray-400/30">
                    0
                </button>
                <button onClick={async () => {
                    await foundEmployee(pinInput, setEmployee)
                    
                    setOpen(true)

                }} disabled={pinInput.length < 4} className="w-1/2 text-center bg-emerald-400/10 w-24 h-24 text-2xl hover:bg-emerald-400/30 font-medium disabled:opacity-25 disabled:hover:bg-emerald-400/10">
                    Go
                </button>
            </div>
        </>
    );
}

export default NumberPad;
