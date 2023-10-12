import { useState } from "react"

import { Modal } from "./Modal";
import { NewOrderModal } from "./NewOrderModal";


export const Orders = () => {

    const [openNewOrderMenu, setOpenNewOrderMenu] = useState(false);

    return (
        <>
            {openNewOrderMenu ? <Modal>
                <NewOrderModal setOpenNewOrderMenu={setOpenNewOrderMenu}/>
                </Modal> : null}
            <div className="flex flex-col w-screen text-white justify-center fixed bg-gray-600">
                <div className='flex justify-end p-3'>
                    <button className='px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700' onClick={() => {
                        setOpenNewOrderMenu(true)
                    }}>Нове замовлення</button>
                </div>
                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Замовлення
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Дата відкриття
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Статус
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Сума
                                </th>
                            </tr>
                        </thead>
                        {/* {employees.length > 0 ? employees.map((employee, i) => */}
                        <>
                            <tbody>
                                <tr className="bg-white border-b border-gray-300 text-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        №18674 | Стіл номер 1
                                    </th>
                                    <td className="px-6 py-4">
                                        17:44
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify items-center">
                                            <div className="mr-7">Нове</div>
                                            <button className='px-6 py-3 bg-blue-400 rounded-lg hover:bg-blue-500 text-white'>Оплатити замовлення</button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        108.00 ГРН
                                    </td>
                                </tr>
                            </tbody>
                        </>

                        {/* ) : null} */}
                    </table>
                    {/* {employees.length > 0 ? null : <h2 className='text-4xl p-6 text-center font-light bg-white'>Працівників не знайдено</h2>} */}
                </div>
            </div>
        </>

    )
}