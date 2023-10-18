import { useEffect, useState } from "react";
import Delete from '../assets/icons/delete.svg';

import { useDispatch, useSelector } from "react-redux";
import { loginCurrentEmployee } from "./employee";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from './Modal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentEmployee } from "../store/slices/currentEmployee.Slice";

const NumberPad = () => {

    const navigate = useNavigate();

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [inputText, setInputText] = useState('');
    const [open, setOpen] = useState(false);

    const { currentEmployee } = useSelector(state => state.currentEmployee);

    const dispatch = useDispatch()

    const handleClick = (number) => {
        console.log(`Кнопка ${number} натиснута`);
        if (inputText.length < 4) {
            setInputText(prevState => prevState + `${number}`);
        }
    }

    const clearPad = () => {
        setInputText('');
    }

    const [now, setNow] = useState(new Date().toLocaleTimeString());

    const notify = () => toast.info("Робочу зміну почато!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light"
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {open ?
                <Modal>
                    <div className='flex justify-center '>
                        <div className='absolute bg-gray-200 shadow-xl w-1/3 h-auto z-10 rounded-md mt-16'>
                            <div className='flex flex-col items-center mx-3 gap-4 mt-5'>
                                {currentEmployee ?
                                    <>
                                        <div className="font-thin text-xl">Вітаємо, {currentEmployee.name}</div>
                                        <div className="font-thin text-xl">Розпочати робочу зміну?</div>
                                        <div className="font-thin text-xl">Початок зміни о: {now}</div>
                                        <div className="flex flex-row gap-x-5 mt-4">
                                            <button className="flex items-center bg-red-500 hover:bg-red-600 rounded-lg mb-7 px-7 py-2 text-white font-medium drop-shadow-md" onClick={() => { setOpen(false) }}>Ні</button>
                                            <div>
                                                <button onClick={() => {
                                                    setOpen(false);
                                                    clearPad();
                                                    notify();
                                                    setTimeout(() => {
                                                        navigate('/service');
                                                    }, 3000);
                                                }} className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 px-7 py-2 text-white font-medium drop-shadow-md">Так</button>

                                            </div>
                                        </div>
                                    </> :
                                    <>
                                        <div className="font-thin text-xl">Вибачте, співробітника з таким логіном не знайдено</div>
                                        <button onClick={() => {
                                            setOpen(false);
                                        }} className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 px-7 py-2 text-white font-medium drop-shadow-md">Ок</button>
                                    </>}

                                <div className="absolute top-1 right-1 cursor-pointer" onClick={() => { setOpen(false) }}>✖</div>
                            </div>
                        </div>
                    </div>
                </Modal> : null}
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
                <input className="w-full h-20 bg-gray-400/10 rounded-lg text-center font-bold text-white text-6xl" type="password" value={inputText} onChange={(e) => setInputText(e.target.value)} />
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
                <button onClick={() => {
                    dispatch(loginCurrentEmployee(inputText)); setOpen(true)
                }} disabled={inputText.length < 4} className="w-1/2 text-center bg-emerald-400/10 w-24 h-24 text-2xl hover:bg-emerald-400/30 font-medium disabled:opacity-25 disabled:hover:bg-emerald-400/10">
                    Go
                </button>
            </div>
        </>
    );
}

export default NumberPad;
