export default function WantToSingleCook({wantToSingleCook}) {
    console.log(wantToSingleCook);
    const {time, calories, title, id}=wantToSingleCook;
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {id}
                            </th>
                            <td className="px-6 py-4">
                                {title}
                            </td>
                            <td className="px-6 py-4">
                                {time}
                            </td>
                            <td className="px-6 py-4">
                                {calories}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium bg-green-600 px-2 py-1 rounded-lg text-white">Preparing</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
