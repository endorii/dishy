import Dinners from "../assets/img/dinners.jpg";
import Coctailes from "../assets/img/coctaіles.jpg";
import Pasta from "../assets/img/pasta.jpg";
import Salades from "../assets/img/salades.jpg";
import Tea from "../assets/img/tea.jpg";
import Coffee from "../assets/img/coffee.jpg";
import Pizza from "../assets/img/pizza.jpg";
import ColdDrinks from "../assets/img/coldDrinks.jpg";
import Close from '../assets/icons/close.svg'
import Sirniki from "../assets/img/sirniki.jpg";
import Oladki from "../assets/img/oladki.jpg";
import Mlintsi from "../assets/img/mlintsi.jpg";
import Egg from "../assets/img/egg.jpg";
import Vareniki from "../assets/img/vareniki.jpg";
import Time from '../assets/icons/time.svg'
import { useState } from "react";

import Test from '../assets/img/test.jpg'


export const NewOrderModal = ({ setOpenNewOrderMenu }) => {

    const [currentFood, setCurrentFood] = useState('');

    const MenuItems = [
        {
            src: Test, title: "Сніданки", items: [
                { name: "Сирники", src: Test, value: 40, time: 10 },
                { name: "Оладки", src: Test, value: 50, time: 20 },
                { name: "Млинці", src: Test, value: 40, time: 10 },
                { name: "Омлет з сиром", src: Test, value: 50, time: 15 },
                { name: "Вареники з вишнями", src: Test, value: 40, time: 20 },
            ]
        },
        {
            src: Test, title: "Коктейлі", items: [
                { name: "Джміль", value: 40, time: 10 },
                { name: "Мохіто", value: 40, time: 10 },
                { name: "Полуничний мілкшейк", value: 40, time: 10 },
                { name: "Ілюзія обману", value: 40, time: 10 },
                { name: "Фруточіно грейпфрутовий", value: 40, time: 10 },
            ]
        },
        {
            src: Test, title: "Паста", items: [
                { name: "Сирники", src: Test, value: 40, time: 10 },
                { name: "Оладки", src: Test, value: 50, time: 20 },
                { name: "Млинці", src: Test, value: 40, time: 10 },
                { name: "Омлет з сиром", src: Test, value: 50, time: 15 },
                { name: "Вареники з вишнями", src: Test, value: 40, time: 20 },
            ]
        },
        {
            src: Test, title: "Салати", items: [
                { name: "Спагеті карбонара", src: Test, value: 110, time: 20 },
                { name: "Спагеті з кревертками", src: Test, value: 210, time: 20 },
                { name: "Паста з соусом Болоньєзе", src: Test, value: 200, time: 40 },
                { name: "Паста з морепродуктами", src: Test, value: 170, time: 15 },
                { name: "Паста з куркою", src: Test, value: 130, time: 20 },
            ]
        },
        {
            src: Test, title: "Чай", items: [
                { name: "Чай імбирний", src: Test, value: 20, time: 10 },
                { name: "Чай шипшиновий", src: Test, value: 20, time: 10 },
                { name: "Чай з корицею", src: Test, value: 20, time: 10 },
                { name: "Чай з калиною та яблуком", src: Test, value: 20, time: 10 },
                { name: "Чорний чай", src: Test, value: 20, time: 10 },
                { name: "Зелений чай", src: Test, value: 20, time: 10 },
                { name: "Чай з апельсином та облепихою", src: Test, value: 20, time: 10 },
                { name: "Безалкогольний глінтвейн", src: Test, value: 20, time: 10 },
                { name: "Чай з травами", src: Test, value: 20, time: 10 },
            ]
        },
        {
            src: Test, title: "Кава", items: [
                { name: "Еспрессо", src: Test, value: 40, time: 10 },
                { name: "Американо", src: Test, value: 40, time: 10 },
                { name: "Капучино", src: Test, value: 40, time: 10 },
                { name: "Латте", src: Test, value: 40, time: 10 },
                { name: "Фредо", src: Test, value: 40, time: 10 },
                { name: "Флет Вайт", src: Test, value: 40, time: 10 },
                { name: "Маккіато", src: Test, value: 40, time: 10 },
                { name: "Романо", src: Test, value: 40, time: 10 },
                { name: "Мокко", src: Test, value: 40, time: 10 },
            ]
        },
        {
            src: Test, title: "Піца", items: [
                { name: "Сирники", src: Test, value: 40, time: 10 },
                { name: "Оладки", src: Test, value: 50, time: 20 },
                { name: "Млинці", src: Test, value: 40, time: 10 },
                { name: "Омлет з сиром", src: Test, value: 50, time: 15 },
                { name: "Вареники з вишнями", src: Test, value: 40, time: 20 },
            ]
        },
        {
            src: Test, title: "Холодні напої", items: [
                { name: "Сирники", src: Test, value: 40, time: 10 },
                { name: "Оладки", src: Test, value: 50, time: 20 },
                { name: "Млинці", src: Test, value: 40, time: 10 },
                { name: "Омлет з сиром", src: Test, value: 50, time: 15 },
                { name: "Вареники з вишнями", src: Test, value: 40, time: 20 },
            ]
        },
    ];

    return (
        <>
            <div className='flex justify-center '>
                <div className=""><img className="absolute top-12 right-14 z-20 w-12 cursor-pointer" src={Close} alt="" onClick={() => {
                    setOpenNewOrderMenu(false)
                }} /></div>
                <div className='absolute bg-white shadow-xl w-[95%] h-[80%] z-10 rounded-md mt-10 bg-gray-400'>
                    <div>
                        <div className="flex justify">
                            <div className="bg-gray-200 w-[30%]">
                                <h2>world</h2>
                            </div>
                            <div className="flex-1 bg-white px-10 py-5 overflow-auto h-screen">
                                <div className="">
                                    <h2 className="text-lg font-medium mb-10">Доступні товари для замовлення</h2>
                                </div>
                                <div>
                                    <ul className="flex flex-wrap gap-10">
                                        {currentFood ? currentFood.items.map((item, i) => (
                                            <li key={i} className="bg-gray-100 rounded-lg shadow-md">
                                                <img className="w-full h-[200px] object-cover object-[50% 100%] rounded-t-lg" src={item.src} alt={item.name} />
                                                <div className="font-thin text-lg px-4 py-2">{item.name}</div>
                                                <div className="flex justify-between">
                                                    <div className=" flex items-center font-thin px-4 py-2"> <img className="w-4 mr-1" src={Time} alt="" />{item.time} хвилин</div>
                                                    <div className="font-thin px-4 py-2">Ціна {item.time} ₴</div>
                                                </div>
                                            </li>
                                        )) : MenuItems.map((item, i) => (
                                            <li key={i} onClick={() => {
                                                setCurrentFood(item);

                                            }} className="bg-gray-100 rounded-lg shadow-md">
                                                <img className="w-[260px] h-[200px] object-cover object-[50% 100%] rounded-t-lg" src={item.src} alt={item.alt} />
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

