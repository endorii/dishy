import { useState } from 'react';
import People from '../assets/icons/people.svg';
import CloseMini from '../assets/icons/close_mini.svg';
import { NewOrderModal } from './NewOrderModal';
import { Modal } from './Modal';

export const Tables = () => {

    const tables = [
        { table_id: 1, busy: false, booked: false },
        { table_id: 2, busy: false, booked: false },
        { table_id: 3, busy: false, booked: false },
        { table_id: 4, busy: false, booked: false },
        { table_id: 5, busy: false, booked: false },
        { table_id: 6, busy: false, booked: false },
        { table_id: 7, busy: false, booked: false },
        { table_id: 8, busy: false, booked: false },
        { table_id: 9, busy: false, booked: false },
        { table_id: 10, busy: false, booked: false },
        { table_id: 11, busy: false, booked: false },
        { table_id: 12, busy: false, booked: false },
        { table_id: 13, busy: false, booked: false },
        { table_id: 14, busy: false, booked: false },
        { table_id: 15, busy: false, booked: false },
        { table_id: 16, busy: false, booked: false },
        { table_id: 17, busy: false, booked: false },
        { table_id: 18, busy: false, booked: false },
        { table_id: 19, busy: false, booked: false },
        { table_id: 20, busy: false, booked: false },
        { table_id: 21, busy: false, booked: false },
        { table_id: 22, busy: false, booked: false },
        { table_id: 23, busy: false, booked: false },
        { table_id: 24, busy: false, booked: false },
        { table_id: 25, busy: false, booked: false },
        { table_id: 26, busy: false, booked: false },
        { table_id: 27, busy: false, booked: false },
        { table_id: 28, busy: false, booked: false },
        { table_id: 29, busy: false, booked: false },
        { table_id: 30, busy: false, booked: false },
        { table_id: 31, busy: false, booked: false },
        { table_id: 32, busy: false, booked: false },
        { table_id: 33, busy: false, booked: false },
        { table_id: 34, busy: false, booked: false },
        { table_id: 35, busy: false, booked: false },
        { table_id: 36, busy: false, booked: false },
    ];

    const [open, setOpen] = useState({});
    const [openNewOrderMenu, setOpenNewOrderMenu] = useState(false);
    const [openPayOrder, setOpenPayOrder] = useState(false);

    const guests = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {openNewOrderMenu ? <Modal>
                <NewOrderModal setOpenNewOrderMenu={setOpenNewOrderMenu} setOpenPayOrder={setOpenPayOrder} openPayOrder={openPayOrder}/>
            </Modal> : null}
            <div className="flex flex-col w-screen text-white justify-center bg-gray-600">
                <div className='flex justify-end p-3'>
                    <button className='px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700' onClick={() => {
                        setOpenNewOrderMenu(true)
                    }}>Нове замовлення</button>
                </div>
                <div className="h-auto bg-gray-200 text-black">
                    <div className="flex flex-wrap p-4 ">
                        {tables.map((table) => (

                            //Change this into table component

                            <div key={table.table_id} className="relative flex flex-col items-center justify-center w-1/6 p-8">
                                <button onClick={() => {
                                    setOpen(prevState => ({ [table.table_id]: !prevState[table.table_id] }));
                                }} className=" h-12 bg-gray-700 text-white rounded-md w-[200px] h-[60px] hover:bg-gray-800">
                                    Столик {table.table_id}
                                </button>
                                {open[table.table_id] ? <div className='absolute bottom-0 bg-gray-800 p-5 rounded-xl'>
                                    <img className='absolute top-3 right-3 w-6' src={CloseMini} alt="" onClick={() => {
                                        setOpen({})
                                    }} />
                                    <p className='text-center text-lg font-medium text-white'>Вкажіть кількість гостей</p>
                                    <ul className='flex justify-between gap-2 flex-wrap text-center p-3'>
                                        {guests.map(guest => {
                                            return (
                                                <li className='w-[30%] h-full '>
                                                    <button className='text-lg font-medium bg-gray-200 px-5 py-2 rounded-xl'>
                                                        {guest}
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div> : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};