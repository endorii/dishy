import { Link, NavLink, Outlet } from "react-router-dom"
import Notification from '../assets/icons/notification.svg';
import { useDispatch, useSelector } from "react-redux";
import GreenDot from '../assets/img/green_dot.png'
import RedDot from '../assets/img/red_dot.png'
import { useEffect } from "react";


export const Service = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        
    }, [])
    const { name } = useSelector(state => state.currentEmployee.currentEmployee);
    const { isAuth } = useSelector(state => state.currentEmployee);
    return (
        <div className="flex flex-col text-white justify-center">
            <aside className="">
                <div className="h-16 bg-gray-700">
                    <div className="flex justify-between items-center">
                        <ul className="flex items-center text-lg">
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "p-5 text-center bg-gray-600 hover:bg-gray-600" : "p-5 text-center hover:bg-gray-600"
                                } to="orders" >Замовлення</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "p-5 text-center bg-gray-600 hover:bg-gray-600" : "p-5 text-center hover:bg-gray-600"
                                } to="tables" >Столи</NavLink>
                            </li>
                        </ul>
                        <div className="flex text-lg">
                            <div className="p-4 text-center hover:bg-gray-600">
                                <img className="w-9" src={Notification} alt="" />
                            </div>
                            <div className="p-5 text-center font-medium">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "p-5 text-center bg-gray-600 hover:bg-gray-600" : "p-5 text-center hover:bg-gray-600"
                                } to="account">
                                    {name}
                                </NavLink>
                            </div>
                            <div className="p-5 border-r-0 text-center hover:bg-gray-600 flex items-center" >{isAuth ? <img className=" h-2" src={GreenDot} alt="" /> : <img className=" h-2" src={RedDot} alt="" />}</div>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-1">
                <div className="bg-slate-100 text-black">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}