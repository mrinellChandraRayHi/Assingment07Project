import { useState } from "react"
import Banner from "./Components/Banner/Banner"
import CooksItems from "./Components/CooksItems/CooksItems"
import NavBar from "./Components/NavBar/NavBar"
import Receips from "./Components/Receips/Receips"
import WantToCook from "./Components/WantToCook/WantToCook"

function App() {

  const [wantToCook, setWatToCook]=useState([]);
  const handleCookWant=(cookWant)=>{
    const newCookWant=[...wantToCook, cookWant];
    setWatToCook(newCookWant);
  }

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-8">
          <NavBar/>
          <Banner/>
          <Receips/>
          <div className="flex">
            <CooksItems handleCookWant={handleCookWant}/>
            <WantToCook wantToCook={wantToCook}/>
          </div>
      </div>
    </>
  )
}

export default App
