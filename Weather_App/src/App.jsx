import React, { useState, useEffect } from 'react'
import GeoCoding from './Components/GeoCoding'
import Manager from './Components/Manager';
function App() {
   const [data, setData] = useState();
   const handleLoc = async (lat, lon) => {
      await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ee22166bcb5ed367827f2147e80762a5`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setData(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
      console.log(lat + " " + lon);
   }
   return (
      <>
      <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-sky-100 to-sky-200">
      <GeoCoding handler={handleLoc}/>
      <Manager weather = {data}/>
      </div>
      </>
   )

}

export default App
