import People from '../assets/icons/people.svg'

export const Service = () => {
    const tables = [
        { id: 1, seats: 1, status: 'busy' },
        { id: 2, seats: 1, status: 'free' },
        { id: 3, seats: 1, status: 'free' },
        { id: 4, seats: 1, status: 'free' },
        { id: 5, seats: 1, status: 'busy' },
        { id: 6, seats: 1, status: 'busy' },
        { id: 7, seats: 1, status: 'free' },
        { id: 8, seats: 1, status: 'free' },
        { id: 9, seats: 2, status: 'free' },
        { id: 10, seats: 2, status: 'free' },
        { id: 11, seats: 1, status: 'free' },
        { id: 12, seats: 1, status: 'busy' },
        { id: 13, seats: 1, status: 'free' },
        { id: 14, seats: 2, status: 'free' },
        { id: 15, seats: 2, status: 'free' },
        { id: 16, seats: 2, status: 'free' },
        { id: 17, seats: 2, status: 'free' },
        { id: 18, seats: 1, status: 'free' },
        { id: 19, seats: 2, status: 'busy' },
        { id: 20, seats: 2, status: 'busy' },
        { id: 21, seats: 3, status: 'free' },
        { id: 22, seats: 3, status: 'free' },
        { id: 23, seats: 2, status: 'free' },
        { id: 24, seats: 2, status: 'free' },
        { id: 25, seats: 3, status: 'free' },
        { id: 26, seats: 3, status: 'free' },
        { id: 27, seats: 4, status: 'free' },
        { id: 28, seats: 4, status: 'free' },
        { id: 29, seats: 3, status: 'free' },
        { id: 30, seats: 3, status: 'free' },
        { id: 31, seats: 4, status: 'busy' },
        { id: 32, seats: 5, status: 'free' },
        { id: 33, seats: 5, status: 'free' },
        { id: 34, seats: 5, status: 'busy' },
        { id: 35, seats: 5, status: 'free' },
        { id: 36, seats: 4, status: 'free' },
    ];

    return (
        <div className="bg-slate-900 p-1 w-screen h-screen">
            <div className='grid items-center justify-center bg-white gap-4 m-8 p-10' style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                {tables.map((table, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <p className="text-center font-thin">№{table.id}</p>
                        <div key={table.id} className={`flex items-center justify-center p-1 cursor-pointer hover:bg-emerald-100 ${table.status === "busy" ? "bg-red-300 hover:bg-red-300": null}`} style={{ border: '3px solid black', width: `${(table.seats * 5) + 55}px`, borderRadius: `${table.seats === 1 || table.seats === 3 || table.seats === 5 ? '40%' : '10%'}`, height: `${(table.seats * 5) + 55}px` }}>
                            <img className='w-6 inline' src={People} alt="" />  <p className='pl-1'>{table.seats}</p>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center w-[30%]' style={{ gridColumn: 'span 6', border: '3px solid black', padding: '10px', textAlign: 'center', marginTop: '30px', justifySelf: 'center' }}>
                    Каса
                </div>
            </div>
        </div>
    );
    
};
