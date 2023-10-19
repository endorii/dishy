import { useState } from "react"



export const DishListItem = ({ dish }) => {

    const [openInfo, setOpenInfo] = useState(false);

    return (
        <>
            <tr className="bg-white border-b border-gray-300 text-gray-700 cursor-pointer" onClick={() => {
                setOpenInfo(!openInfo)
            }}>
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
            {openInfo ?
                <div className="flex flex-col justify-center items-center w-full h-auto bg-white m-5 p-[5%]">
                    <div className="font-medium text-lg mb-2">Інгредієнти для приготування:</div>
                    <div className="flex flex-col justify-start w-full p-2 text-lg gap-1">{dish.ingredients.map((ingredient, i) => (
                        <div key={i}>{ingredient}</div>
                    ))}</div>
                </div>
                : null}
        </>
    )
}