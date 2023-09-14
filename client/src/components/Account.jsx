import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../modules/auth/user';

import Statistic from '../assets/icons/statistic.svg';
import Finances from '../assets/icons/finances.svg';
import Menu from '../assets/icons/menu.svg';
import Storage from '../assets/icons/storage.svg';
import Access from '../assets/icons/access.svg';
import Settings from '../assets/icons/settings.svg';
import Waiter from '../assets/icons/waiter.svg';
import { NavLink, Link, Outlet } from 'react-router-dom';

const NestedItem = ({ item }) => (
    <div className="px-1 mt-3 text-blue-600 text-lg">
        <NavLink to={item.path}>{item.title}</NavLink>
    </div>
);

const AccordionItem = ({ title, children, icon, menuOpen, setMenuOpen }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) {
            setOpen(false);
        }
    }, [menuOpen]);

    return (
        <li className="">
            <div className='cursor-pointer' onClick={() => setMenuOpen(true)}>
                <img src={icon} alt="" className='inline w-6' />
                
                <div className="px-3 py-2 inline text-lg" onClick={() => children ? setOpen(!open) : null}>
                    {menuOpen ? title : null} {' '}
                    {children && menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-3 w-3 inline transform transition duration-150 ease-out ${open ? 'rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg> : null}
                </div>
            </div>

            {open && <div className="pl-8 pb-2 flex flex-col gap-1">{children}</div>}
        </li>
    )
}

const Accordion = ({ menuOpen, setMenuOpen }) => {
    const items = [
        { title: "Статистика", icon: Statistic },
        { title: "Фінанси", icon: Finances },
        { title: "Меню", icon: Menu, children: 
            [
                {title: "Товари", path: "things"},
                {title: "Інгредієнти", path: "ingredients"},
                {title: "QR - меню", path: "qrmenu"}
            ]
        },
        { title: "Склад", icon: Storage, children: 
            [
                {title: "Залишки", path: "residues"},
                {title: "Постачання", path: "supply"},
                {title: "Виробництво", path: "production"},
            ]
        },
        { title: "Доступ", icon: Access, children: 
            [
                {title: "Працівники", path: "employees"},
                {title: "Посади", path: "positions"},

                {title: "Працівники", path: "employees"},
                {title: "Посади", path: "positions"},

                {title: "Касси", path: "cash-registers"} 
            ]
        },
            
        { title: "Налаштування", icon: Settings, children: 
            [
                {title: "Аккаунт", path: "account"},
                {title: "Сповіщення", path: "notifications"},
            ]
        }
    ];

    return (
        <ul className="w-full max-w-md mx-auto mt-4 flex flex-col gap-6">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} icon={item.icon} menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                    {item.children?.map((item, index) => (
                        <NestedItem key={index} item={item} />
                    ))}
                </AccordionItem>
            ))}
        </ul>
    )
}

const Account = () => {

    const [menuOpen, setMenuOpen] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [])

    return (
        <div className="flex">
            <aside className={menuOpen ? "w-[260px] h-screen bg-slate-100 p-7 border-r border-slate-300 overflow-auto" : "w-[85px] h-screen bg-slate-100 p-7 border-r border-slate-300 overflow-auto"}>
                <div>
                    <svg onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`mb-6 h-6 w-6 inline transform transition duration-150 ease-out ${menuOpen ? 'rotate-90' : 'rotate-[260deg]'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </div>
                <div className='flex justify-center '>
                    <button className='font-bold'><img className='w-10 ' src={Waiter} alt="" />GO</button>
                    
                </div>
                <hr className='border-t-1 border-slate-300 mt-3'/>
                <Accordion menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </aside>
            <main className="flex-1 ml">
                <div className="h-screen bg-slate-50 p-10">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default Account;
