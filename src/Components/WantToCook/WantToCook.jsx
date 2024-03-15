import WantToSingleCook from './../WantToSingleCook/WantToSingleCook';
export default function WantToCook({wantToCook}) {
    console.log(wantToCook)
    return (
        <div className='border-2 p-2 rounded-lg border-black bg-gray-200'>
            <div className='text-center mb-5 font-bold text-3xl'>Want to Cook : {wantToCook.length}</div>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Index
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Calories
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {wantToCook.map((wantToSingleCook,idx)=><WantToSingleCook key={idx} wantToSingleCook={wantToSingleCook}/>)}
        </div>
    )
}
