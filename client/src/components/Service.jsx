import { Link, Outlet } from "react-router-dom"

import Notification from '../assets/icons/notification.svg';

export const Service = () => {
    return (
        <div className="flex flex-col h-screen w-screen text-white justify-center fixed">
            <aside className="">
                <div className="w-full h-16 bg-gray-700">
                    <div className="flex justify-between items-center h-full">
                        <ul className="flex h-full items-center">
                            <li>
                                <Link to="orders" className="p-5 border border-x-zinc-800 border-y-0 text-center hover:bg-gray-600">Замовлення</Link>
                            </li>
                            <li>
                                <Link to="tables" className="p-5 border border-r-zinc-800 border-y-0 border-l-0 text-center hover:bg-gray-600">Столи</Link>
                            </li>
                        </ul>
                        <div className="flex">
                            <div className="p-4 border border-x-zinc-800 border-y-0 text-center hover:bg-gray-600">
                                <img className="w-9" src={Notification} alt="" />
                            </div>
                            <div className="p-5 border border-r-zinc-800 border-y-0 border-l-0 text-center hover:bg-gray-600">account</div>
                            <div className="p-5 border border-r-zinc-800 border-y-0 border-l-0 border-r-0 text-center hover:bg-gray-600" >status</div>
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