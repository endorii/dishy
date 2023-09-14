import Plus from '../assets/icons/plus.svg'
import { useState } from 'react';

const Employees = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between ">
                <h2 className="text-3xl font-medium">Працівники</h2>
                <button className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg px-7 py-2 text-white font-medium drop-shadow-md">Додати
                    <img className='w-7 inline pl-2' src={Plus} alt="" />
                </button>
                {open ? <div>
                    
                </div> : null}
            </div>
            <hr className='border-t-1 border-slate-300 my-10'/>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Ім'я
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Логін
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Пінкод
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Посада
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Востаннє здійснено вхід
                            </th>
                            <th scope="col" class="px-1 py-1">
                                <span class="sr-only">Змінити</span>
                            </th>
                            <th scope="col" class="px-1 py-1">
                                <span class="sr-only">Опції</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-gray-300 text-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Сергій
                            </th>
                            <td class="px-6 py-4">
                                job.tenshi@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                0000
                            </td>
                            <td class="px-6 py-4">
                                Офіціант
                            </td>
                            <td class="px-6 py-4">
                                14 вересня 13:30
                            </td>
                            <td class="px-2 py-1 text-right">
                                <a href="#" class="font-medium text-blue-600 hover:underline">,,,</a>
                            </td>
                            <td class="px-2 py-1 text-left">
                                <a href="#" class="font-medium text-blue-600 hover:underline">...</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Employees;