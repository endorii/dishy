import { MenuItems } from "../functions";

const Things = () => {
    return (
        <div className='flex flex-col h-full' >
                <div className="flex justify-between ">
                    <h2 className="text-3xl font-medium">Доступні страви для замовлень</h2>
                    <button className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg px-7 py-2 text-white font-medium drop-shadow-md"
                        // onClick={() => setAddEmployeeModalOpen(true)}
                        >Додати
                        {/* <img className='w-7 inline pl-2' src={Plus} alt="" /> */}
                    </button>
                </div>
                <hr className='border-t-1 border-slate-300 my-10' />

                <div className="relative shadow-md sm:rounded-lg overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Назва
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ціна
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Час приготування
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Кількість
                                </th>
                                <th scope="col" className="px-1 py-1">
                                    <span className="sr-only">Змінити</span>
                                </th>
                                <th scope="col" className="px-1 py-1">
                                    <span className="sr-only">Опції</span>
                                </th>
                            </tr>
                        </thead>
                        {MenuItems.length > 0 ? MenuItems.map((item, i) =>
                            item.items.map((dish, i) => {
                                return (
                                    <>
                                <tbody key={i}>
                                    <tr className="bg-white border-b border-gray-300 text-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {dish.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {dish.value}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dish.time}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dish.amount}
                                        </td>
                                        <td className="px-2 py-1 text-right">
                                            <a 
                                            // onClick={async () => {
                                            //     setCurrentEmployee(employee)
                                            //     setEditEmployeeModalOpen(true);
                                            //     dispatch(fetchEmployees())
                                            // }}

                                                href="#" className="font-medium text-blue-600 hover:underline">Редагувати</a>
                                        </td>
                                        <td className="px-2 py-1 text-left">
                                            <a 
                                            // onClick={async () => { await deleteEmployee(employee._id); dispatch(fetchEmployees()) }} 
                                            href="#" className="font-medium text-blue-600 hover:underline">Видалити</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                                )
                            })

                        ) : null}
                    </table>
                    {MenuItems.length > 0 ? null : <h2 className='text-4xl p-6 text-center font-light bg-white'>Страв не знайдено не знайдено</h2>}
                </div>

            </div>
    )
}

export default Things;