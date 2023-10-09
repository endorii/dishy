import { Link, Outlet } from "react-router-dom"

import Notification from '../assets/icons/notification.svg';
import { useDispatch, useSelector } from "react-redux";
import GreenDot from '../assets/img/green_dot.png'
import RedDot from '../assets/img/red_dot.png'
import { useEffect } from "react";
import { fetchCurrentEmployee } from "../store/slices/currentEmployee.Slice";



export const Service = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentEmployee());
    }, [])
    const {name} = useSelector(state => state.currentEmployee.currentEmployee);
    const {isAuth} = useSelector(state => state.currentEmployee);
    return (
        <div className="flex flex-col h-screen w-screen text-white justify-center fixed">
            <aside className="">
                <div className="w-full h-16 bg-gray-700">
                    <div className="flex justify-between items-center h-full">
                        <ul className="flex h-full items-center">
                            <li>
                                <Link to="orders" className="p-5  text-center hover:bg-gray-600">Замовлення</Link>
                            </li>
                            <li>
                                <Link to="tables" className="p-5 text-center hover:bg-gray-600">Столи</Link>
                            </li>
                        </ul>
                        <div className="flex">
                            <div className="p-4  text-center hover:bg-gray-600">
                                <img className="w-9" src={Notification} alt="" />
                            </div>
                            <div className="p-5 text-center hover:bg-gray-600 font-medium"><Link to="account">{name}</Link></div>
                            <div className="p-5 border-r-0 text-center hover:bg-gray-600 flex items-center" >{isAuth ? <img className=" h-2" src={GreenDot} alt="" /> : <img className=" h-2" src={RedDot} alt="" />}</div>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-1 ">
                <div className="h-full bg-slate-100 text-black">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}