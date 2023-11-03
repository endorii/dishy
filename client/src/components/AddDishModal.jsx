import Close from '../assets/icons/close.svg'

export const AddDishModal = ({ setOpenAddDishModal }) => {
    return (
        <div className='flex justify-center'>
            <div className=""><img className="absolute top-16 right-20 z-20 w-12 cursor-pointer bg-white rounded-3xl" src={Close} alt="" onClick={() => {
                setOpenAddDishModal(false)
            }} />
            </div>
            <div className='absolute flex bg-gray-none w-[95%] z-10 rounded-md mt-10'>
                <div className="flex justify-around w-full rounded-xl h-[90vh] gap-3 p-10">
                    <div className='w-[65%] flex flex-col p-10 bg-white rounded-xl'>
                        <div className='text-3xl font-medium text-center'>Додати страву</div>
                        <form className='flex flex-wrap justify-around m-10 gap-3' action="">
                            <div className='flex flex-col w-1/2'>
                                <div>
                                    <label htmlFor="dish_name" className="block text-sm font-medium text-gray-900 mb-1 ">Назва продукту</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required
                                    />
                                    {/* {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>} */}
                                </div>
                                <div>
                                    <label htmlFor="value" className="block text-sm font-medium text-gray-900 mb-1">Ціна</label>
                                    <input
                                        type="number"
                                        name="value"
                                        id="value"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-1">Час приготування</label>
                                    <input
                                        type="number"
                                        name="time"
                                        id="time"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-900 mb-1">Кількість</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-900 mb-1">Вага</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        id="weight"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-1 ">Категорія</label>
                                    <select id='category'
                                        name="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
                                        {/* {positions.map((position, i) => {
                                        return <option key={i} value={position.name}>{position.name}</option>
                                        })} */}
                                    </select>
                                    {/* {(positionTouched && positionError) && <div className="text-red-600">{positionError}</div>} */}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <label htmlFor="file" className="block text-sm font-medium text-gray-900 mb-1 ">Інгредієнти, (через кому з великої букви)</label>
                                    <textarea className='border p-3' name="" id="" cols="50" rows="11"></textarea>
                                    {/* {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>} */}
                                </div>
                                <div>
                                    <label htmlFor="file" className="block text-sm font-medium text-gray-900 mb-1 ">Завантажити фотографію</label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required
                                    />
                                    {/* {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>} */}
                                </div>
                            </div>
                            <button
                                className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mt-10 mx-[30%] px-7 py-2 text-white font-medium drop-shadow-md disabled:bg-green-900/20 disabled:hover:bg-green-900/20 disabled:text-gray-100 disabled:cursor-not-allowed"
                            >Підтвердити
                            </button>
                        </form>
                    </div>
                    <div className='w-[35%] p-10 flex flex-col bg-white rounded-xl'>
                        <div className='text-3xl font-medium text-center'>Додати категорію страв</div>
                        <form className='flex flex-col justify-center m-10 gap-3' action="">
                            <div>
                                <label htmlFor="category_name" className="block text-sm font-medium text-gray-900 mb-1 ">Назва категорії</label>
                                <input
                                    type="text"
                                    name="category_name"
                                    id="category_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                {/* {(loginTouched && loginError) && <div className="text-red-600">{loginError}</div>} */}
                            </div>
                            <div>
                                <label htmlFor="file" className="block text-sm font-medium text-gray-900 mb-1 ">Завантажити фотографію</label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                                {/* {(nameTouched && nameError) && <div className="text-red-600">{nameError}</div>} */}
                            </div>
                            <button
                                // disabled={nameError || loginError || pinError || positionError} 
                                className="bg-green-500 hover:bg-green-600 rounded-lg mb-7 mx-[30%] mt-10 px-7 py-2 text-white font-medium drop-shadow-md disabled:bg-green-900/20 disabled:hover:bg-green-900/20 disabled:text-gray-100 disabled:cursor-not-allowed">
                                Підтвердити
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}