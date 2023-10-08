import { useState } from "react";
import Delete from '../assets/icons/delete.svg';

import { useDispatch } from "react-redux";
import { loginCurrentEmployee } from "./employee";
import { Link } from "react-router-dom";

const NumberPad = () => {


    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [inputText, setInputText] = useState('');

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

    return (
        <>
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
                <Link to="/">
                    <button onClick={() => { clearPad(); dispatch(loginCurrentEmployee(inputText)) }} className="w-1/2 text-center bg-emerald-400/10 w-24 h-24 text-2xl hover:bg-emerald-400/30 font-medium">
                        Go
                    </button>
                </Link>

            </div>
        </>
    );
}

export default NumberPad;
