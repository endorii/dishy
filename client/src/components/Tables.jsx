import People from '../assets/icons/people.svg'

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

    return (
        <>
            <div className="flex flex-col w-screen text-white justify-center fixed bg-gray-600">
                <div className='flex justify-end p-3'>
                    <button className='px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700'>Нове замовлення</button>
                </div>
                <div className="h-screen bg-gray-200 text-black overflow-y-auto">
                    <div className="flex flex-wrap p-4">
                        {tables.map((table) => (
                            <div key={table.table_id} className="flex justify-center w-1/6 p-8">
                                <button className=" h-12 bg-gray-700 text-white rounded-md w-[200px] h-[60px] hover:bg-gray-800">
                                    Столик {table.table_id}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};