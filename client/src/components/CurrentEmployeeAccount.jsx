import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { setCurrentEmployee } from "../store/slices/currentEmployee.Slice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeIsCurrentEmployee } from "../view/pages/Access/Employees/employee"

export const CurrentEmployeeAccount = () => {

    const currentEmployee = useSelector(state => state.currentEmployee.currentEmployee)
    const startTime = new Date('Mon Oct 16 2023 19:30:57 GMT+0300');
    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState('');

    const dispatch = useDispatch()

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
            <div className="py-10 h-full">
                <div className="flex text-center justify-center">
                    <div>
                        <div className="sticky top-[25%] left-[17%] flex flex-col fustify-center items-center w-[43%] text-4xl font-thin mt-[6%]">
                            Час вашого сеансу:

                            <div className="text-9xl text-gray-700 font-bold p-10">
                                {currentTime}
                            </div>
                            <div>
                                <button className="px-6 py-3 bg-red-500 text-3xl text-white rounded-lg" onClick={() => { navigate('/employees'); dispatch(changeIsCurrentEmployee()); dispatch(setCurrentEmployee({})); }}>Завершити робочу зміну</button>
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-10 w-[43%] flex-col">
                        <div className=" bg-white rounded-xl shadow-md">
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
                                        Робочі години за весь час: {currentEmployee.totalWorkingTime}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Кількість обслужених замовлень\столиків: 100
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className=" bg-white rounded-xl shadow-md">
                            <p className="text-2xl p-5 font-medium text-gray-700">Інформація за зміну:</p>
                            <ul className="flex flex-col gap-10 p-10 text-left text-xl font-thin">
                                <li>
                                    <p>
                                        Початок робочої зміни о: {startTime.toLocaleTimeString()}
                                    </p>
                                </li>  
                                <li>
                                    <p>
                                        Кількість обслужених замовлень\столиків за зміну: 100
                                    </p>
                                </li>          
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}