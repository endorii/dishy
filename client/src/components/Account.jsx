import Statistic from '../assets/icons/statistic.svg';
import Finances from '../assets/icons/finances.svg';
import Menu from '../assets/icons/menu.svg';
import Storage from '../assets/icons/storage.svg';
import Access from '../assets/icons/access.svg';
import Settings from '../assets/icons/settings.svg';

import { useState } from 'react';

const NestedItem = ({title}) => {
    return (
        <div className="px-1 mt-3 text-blue-600 text-lg">
            {title}
        </div>
    )
}

const AccordionItem = ({title, children, icon, menuOpen, setMenuOpen}) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="">
           <div className='cursor-pointer' onClick={() => setMenuOpen(true)}>
            <img src={icon} alt="" className='inline w-6'/>
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

const Accordion = ({menuOpen, setMenuOpen}) => {
    return (
    <ul className="w-full max-w-md mx-auto mt-4 flex flex-col gap-6">
<AccordionItem title="Статистика" icon={Statistic} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<AccordionItem title="Фінанси" icon={Finances} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<AccordionItem title="Меню" icon={Menu} menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
    <NestedItem title="Товари" />
    <NestedItem title="Інгредієнти" />
    <NestedItem title="QR - меню" />
</AccordionItem>
<AccordionItem title="Склад" icon={Storage} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<AccordionItem title="Доступ" icon={Access} menuOpen={menuOpen} setMenuOpen={setMenuOpen}> 
    <NestedItem title="Працівники" />
    <NestedItem title="Посади" />
    <NestedItem title="Касси" />
</AccordionItem>
<AccordionItem title="Налаштування" icon={Settings} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </ul>
    )
}

export const Account = () => {

    const [menuOpen, setMenuOpen] = useState(true)

    return (
        <div className="flex">
            <aside className={menuOpen ? "w-64 h-screen bg-slate-100 p-10 border-r border-slate-300" : "w-[105px] h-screen bg-slate-100 p-10 border-r border-slate-300"}>
                <div>
                    <svg onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`mb-6 h-6 w-6 inline transform transition duration-150 ease-out ${menuOpen ? 'rotate-90' : 'rotate-[260deg]'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </div>
                <Accordion menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </aside>
            <main className="flex-1 ml">
                <div className="h-screen bg-slate-50 p-10">
                    <h1 className="text-4xl">Top Content</h1>
                </div>
            </main>
        </div>
    )
}