// import Dinners from "../assets/img/dinners.jpg";
// import Coctailes from "../assets/img/coctaіles.jpg";
// import Pasta from "../assets/img/pasta.jpg";
// import Salades from "../assets/img/salades.jpg";
// import Tea from "../assets/img/tea.jpg";
// import Coffee from "../assets/img/coffee.jpg";
// import Pizza from "../assets/img/pizza.jpg";
// import ColdDrinks from "../assets/img/coldDrinks.jpg";
// import Sirniki from "../assets/img/sirniki.jpg";
// import Oladki from "../assets/img/oladki.jpg";
// import Mlintsi from "../assets/img/mlintsi.jpg";
// import Egg from "../assets/img/egg.jpg";
// import Vareniki from "../assets/img/vareniki.jpg";
import Close from '../assets/icons/close.svg'
import Time from '../assets/icons/time.svg'
import { useState } from "react";
import { MenuItems, configureOrder, getTotalInsideOrderValue } from "../functions";
import { Modal } from './Modal';
import { PayOrder } from './PayOrder';
import { fetchOrders } from '../store/slices/ordersSlice';
import { useDispatch } from 'react-redux';

export const NewOrderModal = ({ setOpenNewOrderMenu, setOpenPayOrder, openPayOrder, currentTable }) => {
    const [guests, setGuests] = useState([]);
    const [currentCategoryFood, setCurrentCategoryFood] = useState('');
    const [currentGuest, setCurrentGuest] = useState({})

    const dispatch = useDispatch();

    const addGuest = () => {
        const newGuest = {
            id: guests.length + 1,
            guest: [],
        };

        setGuests([...guests, newGuest]);
    };

    const selectFoodForGuest = (currentGuest, foodItem) => {
        const updatedGuests = [...guests];
        currentGuest.guest.push(foodItem);
        setGuests(updatedGuests);
    };

    const removeGuest = (guestId) => {
        const updatedGuests = guests.filter((guest) => guest.id !== guestId);
        setGuests(updatedGuests);
    };

    return (
        <>
            {openPayOrder ? <Modal>
                <PayOrder setOpenPayOrder={setOpenPayOrder} />
            </Modal> : null}
            <div className='flex justify-center'>
                <div className=""><img className="absolute top-14 right-20 z-20 w-12 cursor-pointer" src={Close} alt="" onClick={() => {
                    setOpenNewOrderMenu(false)
                }} /></div>
                <div className='absolute bg-white shadow-xl w-[95%] z-10 rounded-md mt-10 bg-gray-400'>
                    <div>
                        <div className="flex rounded-xl h-[90vh]">
                            <div className="bg-gray-200 w-[30%] h-full flex flex-col justify-between overflow-x-auto">
                                <div>
                                    <table className="w-full text-sm text-left text-gray-500 ">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                                            <tr>
                                                <th scope="col" className="px-10 py-3">
                                                    Назва
                                                </th>
                                                <th scope="col" className="px-1 py-3">
                                                    Кількість
                                                </th>
                                                <th scope="col" className="px-1 py-3">
                                                    Ціна
                                                </th>
                                                <th scope="col" className="px-1 py-3">
                                                    Загалом
                                                </th>
                                                <th scope="col" className="px-1 py-3">

                                                </th>
                                            </tr>
                                        </thead>
                                    </table>

                                    <div className="p-5 flex flex-col gap-y-3 items-start">
                                        {guests.map((guest, i) => {
                                            return (
                                                <div key={i} className='bg-white w-full rounded-lg p-2' onClick={() => setCurrentGuest(guest)}>
                                                    <div className='flex justify-between px-4'>
                                                        <div className="text-lg font-medium">Гість {guest.id}</div>
                                                        <div className="text-lg font-medium" onClick={() => { removeGuest(guest.id) }}>Видалити</div>
                                                    </div>
                                                    <div className='w-full'>
                                                        <tbody className='bg-gray-100 p-3 m-2 rounded-xl w-full'>
                                                            {guest.guest.map((dish, i) => {
                                                                return (
                                                                    <tr key={i} className="bg-white border-b border-gray-300 text-gray-700">
                                                                        <td className="px-3 py-3">
                                                                            {dish.name}
                                                                        </td>
                                                                        <td className="px-20 py-3 text-center">
                                                                            1
                                                                        </td>
                                                                        <td className="px-3 py-3 text-center">
                                                                            {dish.value}
                                                                        </td>
                                                                        <td className="px-14 py-3 text-center">
                                                                            {dish.value}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <button onClick={() => addGuest()} className="text-lg font-medium" >+ Додати гостя</button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 m-7 rounded-lg">
                                    <div className="flex justify-center bg-white px-7 py-5 rounded-lg">
                                        <button onClick={() => { configureOrder(guests, currentTable); dispatch(fetchOrders()); setOpenNewOrderMenu(false) }} className="w-full bg-sky-500 p-3 rounded-lg text-white font-medium">Відправити на кухню</button>

                                    </div>
                                    <div className='bg-white rounded-lg p-7 flex flex-col gap-3'>
                                        <div className="flex justify-between items-center">
                                            <div className="font-thin text-2xl">Разом до сплати</div>
                                            <div className="text-xl font-medium">{getTotalInsideOrderValue(guests)} ₴</div>
                                        </div>
                                        {/* <div className=" flex justify-between">
                                            <button className="bg-white p-3 border-2 text-blue-500 border-blue-200 text-2xl rounded-lg text-blue-600 font-medium w-[47%]">. . .</button>
                                            <button onClick={() => { setOpenPayOrder(true); setcurrentOrder() }} className="w-[47%] bg-green-500 p-3 rounded-lg text-white font-medium">Оплатити замовлення</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white px-10 py-5 overflow-x-auto">
                                <div className="">
                                    <h2 className="text-lg font-medium mb-5">Доступні товари для замовлення</h2>
                                    <button onClick={() => {
                                        setCurrentCategoryFood('')
                                    }} className="text-lg font-medium mb-10 bg-blue-100 px-4 py-1 rounded-xl hover:bg-blue-200">Назад</button>
                                </div>
                                <div className="">
                                    <ul className="flex flex-wrap gap-10">
                                        {currentCategoryFood ? currentCategoryFood.items.map((item, i) => (
                                            <li key={i} className="bg-gray-100 rounded-lg shadow-md cursor-pointer" onClick={() => { selectFoodForGuest(currentGuest, item) }}>
                                                <img className="w-[260px] h-[200px] object-cover object-[50% 100%] rounded-t-lg" src={item.src} alt={item.name} />
                                                <div className="font-thin text-lg px-4 py-2">{item.name}</div>
                                                <div className="flex justify-between">
                                                    <div className=" flex items-center font-thin px-4 py-2"> <img className="w-4 mr-1" src={Time} alt="" />{item.time} хвилин</div>
                                                    <div className="font-thin px-4 py-2">Ціна {item.value} ₴</div>
                                                </div>
                                            </li>
                                        )) : MenuItems.map((item, i) => (
                                            <li key={i} onClick={() => {
                                                setCurrentCategoryFood(item);

                                            }} className="bg-gray-100 rounded-lg shadow-md cursor-pointer">
                                                <img className="w-[260px] h-[200px] object-cover object-[50% 100%] rounded-t-lg" src={item.logo} alt={item.alt} />
                                                <div className="font-thin text-lg px-4 py-2">{item.title}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

