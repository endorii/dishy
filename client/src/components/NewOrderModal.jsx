import Dinners from "../assets/img/dinners.jpg";
import Coctailes from "../assets/img/coctaіles.jpg";
import Pasta from "../assets/img/pasta.jpg";
import Salades from "../assets/img/salades.jpg";
import Tea from "../assets/img/tea.jpg";
import Coffee from "../assets/img/coffee.jpg";
import Pizza from "../assets/img/pizza.jpg";
import ColdDrinks from "../assets/img/coldDrinks.jpg";


export const NewOrderModal = () => {

    const MenuItems = [
        { src: Dinners, title: "Сніданки" },
        { src: Coctailes, title: "Коктейлі" },
        { src: Pasta, title: "Паста" },
        { src: Salades, title: "Салати" },
        { src: Tea, title: "Чай" },
        { src: Coffee, title: "Кава" },
        { src: Pizza, title: "Піца" },
        { src: ColdDrinks, title: "Холодні напої" },
    ];

    return (
        <>
            <div className='flex justify-center '>
                <div className='absolute bg-white shadow-xl w-[95%]  h-auto z-10 rounded-md mt-10 bg-gray-400'>
                    <div>
                        <div className="flex justify">
                            <div className="bg-gray-200 w-[30%]">
                                <h2>world</h2>
                            </div>
                            <div className="flex-1 bg-white px-10 py-5">
                                <div className="">
                                    <h2 className="text-lg font-medium mb-10">Доступні товари для замовлення</h2>
                                </div>
                                <div>
                                    <ul className="flex flex-wrap gap-10">
                                        {MenuItems.map((item, i) => (
                                            <li key={i} className="bg-gray-100 rounded-lg shadow-md">
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

