import { useEffect, useState } from "react";
import { fetchPositions } from "../../../../store/slices/positions.Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Modal } from "../../../../components/Modal";
import AddPosition from "./AddPosition";
import EditPosition from "./EditPosition";
import { deletePosition } from "./positions";
import Plus from '../../../../assets/icons/plus.svg';

const PositionsList = () => {

    const dispatch = useDispatch();
    const { positions } = useSelector(state => state.positions)

    const [addPositionModalOpen, setAddPositionModalOpen] = useState(false);
    const [editPositionModalOpen, setEditPositionModalOpen] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        dispatch(fetchPositions())
    }, [])

    return (
        <>
            {addPositionModalOpen &&
                <Modal>
                    <AddPosition setOpen={setAddPositionModalOpen} />
                </Modal>
            }
            {editPositionModalOpen &&
                <Modal>
                    <EditPosition setOpen={setEditPositionModalOpen} currentPosition={currentPosition} />
                </Modal>
            }

            <div className='flex flex-col' >
                <div className="flex justify-between ">
                    <h2 className="text-3xl font-medium">Посади</h2>
                    <button className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg px-7 py-2 text-white font-medium drop-shadow-md"
                        onClick={() => setAddPositionModalOpen(true)}>Додати
                        <img className='w-7 inline pl-2' src={Plus} alt="" />
                    </button>
                </div>
                <hr className='border-t-1 border-slate-300 my-10' />

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Посада
                                </th>

                                <th scope="col" className="px-1 py-3">
                                    Дозволи
                                </th>
                                <th scope="col" className="px-1 py-1">
                                    <span className="sr-only">Змінити</span>
                                </th>
                                <th scope="col" className="px-1 py-1">
                                    <span className="sr-only">Опції</span>
                                </th>
                            </tr>
                        </thead>
                        {positions.length > 0 ? positions.map((position, i) =>
                            <>
                                <tbody
                                    key={i}
                                >
                                    <tr className="bg-white border-b border-gray-300 text-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {position.name}
                                        </th>
                                        <td className="px-1 py-4">
                                            {position.permissions}
                                        </td>
                                        <td className="px-2 py-1 text-right">
                                            <p onClick={async () => {
                                                setCurrentPosition(position)
                                                setEditPositionModalOpen(true);
                                                dispatch(fetchPositions())
                                            }}

                                             className="font-medium text-blue-600 hover:underline">Редагувати</p>
                                        </td>
                                        <td className="px-2 py-1 text-left">
                                            <p
                                                onClick={async () => {
                                                    await
                                                    deletePosition(position._id);
                                                    dispatch(fetchPositions())
                                                }}
                                             className="font-medium text-blue-600 hover:underline">Видалити</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </>

                        ) : null}
                    </table>
                    {positions.length > 0 ? null : <h2 className='text-4xl p-6 text-center font-light bg-white'>Посад не знайдено</h2>}
                </div>

            </div>
        </>
    )
}

export default PositionsList;