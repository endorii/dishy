import Left from '../assets/icons/angle-left.svg';
import { Link } from "react-router-dom";
import NumberPad from "./NumberPad";

export const EmployeeLogin = () => {
    return (
        <div className="flex h-screen flex-1 flex-col justify-center px-6 lg:px-8 bg-gray-900">
            <Link to="/employees" className="absolute flex flex-row items-center top-10 left-10 text-white text-center bg-emerald-400/10 text-lg px-5 py-1 hover:bg-emerald-400/30 font-medium"> <img className="w-12" src={Left} alt="" />Повернутися назад</Link> 
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                    Введіть пін-код
                </h2>
            </div>
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                <NumberPad/>
            </div>
        </div>
    )
}