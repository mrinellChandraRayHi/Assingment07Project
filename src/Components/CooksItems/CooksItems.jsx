import { useEffect, useState } from "react"
import CookItems from "../CookItems/CookItems";

export default function CooksItems({handleCookWant}) {
    const [cooksItems, setcooksItems]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const res=await fetch('fakeData.json');
                const data=await res.json();
                setcooksItems(data);
                console.log(cooksItems);
            }catch{
                console.log("Dat not found");
            }
        }
        fetchData();
    },[])
    return (
        <div className="w-2/3 mb-5 md:grid grid-cols-2 md:gap-5">
            {cooksItems.map((cookItems,idx)=><CookItems cookItems={cookItems} key={idx} handleCookWant={handleCookWant}/>)}
        </div>
    )
}
