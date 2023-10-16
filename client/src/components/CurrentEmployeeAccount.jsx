import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { deleteСurrentEmployee } from "./employee"
import { setCurrentEmployee } from "../store/slices/currentEmployee.Slice"
import { useNavigate } from "react-router-dom"

export const CurrentEmployeeAccount = () => {

    const currentEmployee = useSelector(state => state.currentEmployee.currentEmployee)
    const startTime = new Date('Mon Oct 16 2023 19:30:57 GMT+0300');
    const id = useSelector(state => state.currentEmployee.currentEmployee._id)
    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState('');

    const getCurrentOnlineTime = (startTime) => {
        const now = new Date();
        const diffInMilliseconds = now - startTime;
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        const seconds = diffInSeconds % 60;
        const minutes = Math.floor(diffInSeconds / 60) % 60;
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getCurrentOnlineTime(startTime))
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return (
        <>
            <div className="py-10 h-[855px]">
                <div className="flex w-auto text-center justify-center">
                    <div className="w-[43%] text-4xl font-thin mt-[6%]">
                        Час вашого сеансу:

                        <div className="text-9xl text-gray-700 font-bold p-10">
                            {currentTime}
                        </div>
                        <div>
                            <button className="px-6 py-3 bg-red-500 text-3xl text-white rounded-lg" onClick={() => {deleteСurrentEmployee(id); setCurrentEmployee({}); navigate('/')}}>Завершити робочу зміну</button>
                        </div>

                    </div>
                    <div className="w-[43%] bg-white rounded-xl shadow-md">
                        <p className="text-2xl p-5 font-medium text-gray-700">Загальна інформація:</p>
                        <ul className="flex flex-col gap-10 p-10 text-left text-xl font-thin">
                            <li>
                                <p>
                                    Імя: {currentEmployee.name}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Посада: {currentEmployee.position}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Початок робочої зміни о: {startTime.toLocaleTimeString()}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Робочі години за весь час: 1000
                                </p>
                            </li>
                            <li>
                                <p>
                                    Кількість обслужених замовлень\столиків за сьогодні: 10
                                </p>
                            </li>
                            <li>
                                <p>
                                    Кількість обслужених замовлень\столиків: 100
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            
        </>
    )
}