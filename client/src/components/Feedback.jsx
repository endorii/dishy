import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactTexts } from "../store/slices/contactTexts.Slice";

export const Feedback = () => {

    const dispatch = useDispatch();

    const {contactTexts} = useSelector(state => state.contactTexts);

    useEffect(() => {
        dispatch(fetchContactTexts());
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-medium">Зворотній зв'язок</h2>        
            <hr className='border-t-1 border-slate-300 my-10' />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Від
                            </th>
                            <th scope="col" className="px-1 py-3 text-center">
                                Дата
                            </th>
                            <th scope="col" className="px-1 py-3 text-center">
                                Контент
                            </th>
                            <th scope="col" className="px-1 py-3 text-center">

                            </th>
                        </tr>
                    </thead>
                    {contactTexts.length > 0 ? contactTexts.map((contactText, i) =>
                        <>
                            <tbody
                                key={i}>
                                <tr className="bg-white border-b border-gray-300 text-gray-700">
                                    <th scope="row" className="px-3 py-5 font-medium text-gray-900 whitespace-nowrap w-[10%] text-center">
                                        {contactText.from}
                                    </th>
                                    <td className="px-3 py-5 w-[15%] text-base text-center">
                                        <div className="bg-sky-500/20 p-3 rounded-lg">{contactText.date}</div>
                                    </td>
                                    <td className="px-3 py-5 text-lg w-[60%]">
                                        {contactText.content}
                                    </td>
                                    <td className="px-3 py-5 w-[5%] text-center">
                                        <input className="w-6 h-6 cursor-pointer" type="checkbox" />
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    ) : null}
                </table>
                {contactTexts.length > 0 ? null : <h2 className='text-4xl p-6 text-center font-light bg-white'>Повідомлень не знайдено</h2>}
            </div>
        </div>
    )
}