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
      <div className='bg-gradient-to-r from-sky-100 to-sky-200 shadow-xl flex flex-row justify-between drop-shadow-xl'>
         <h1 className='bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold px-5 drop-shadow-xl py-5 inline-block'>WeatherApp</h1>
         <a href="https://github.com/Diptoprovo" className="text-blue-500 pe-5 pt-6 font-bold">Github</a>
      </div>
      <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-sky-100 to-sky-200">
      <GeoCoding handler={handleLoc}/>
      <Manager weather = {data}/>
      </div>
      </>
   )

}

export default App
