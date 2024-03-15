import { LuClock } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
export default function CookItems({cookItems, handleCookWant}) {
    console.log(cookItems);
    const{calories, description, image, ingredients, time, title}=cookItems
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <hr className="text-2xl font-bold"/>
                    <div className="space-y-4">
                        <div className="text-2xl font-bold">Ingredients: {ingredients.length}</div>
                        <ul className="space-y-1">
                            {ingredients.map((value,idx)=><li className="list-disc list-inside" key={idx}>{value.name}</li>)}
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2"><LuClock /> {time} minutes</div>
                        <div className="flex items-center gap-2"><FaFire /> {calories} calories</div>
                    </div>
                    <div className="card-actions justify-start">
                    <button onClick={()=>handleCookWant(cookItems)} className="btn btn-primary bg-green-600 text-white rounded-2xl px-8 border-none mt-5">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
