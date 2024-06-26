import React, { useState, useEffect } from 'react'
import GeoCoding from './Components/GeoCoding'
import Manager from './Components/Manager';
function App() {
   const [data, setData] = useState();
   //  useEffect(() => {
   //     fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ee22166bcb5ed367827f2147e80762a5')
   //        .then((response) => response.json())
   //        .then((data) => {
   //           console.log(data);
   //           setData(data);
   //        })
   //        .catch((err) => {
   //           console.log(err.message);
   //        });
   //  }, []);
   // return (
   //   <>
   //     <div>
   //     {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
   //     </div>
   //   </>
   // )
   const handleLoc = (lat, lon) => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=2&appid=ee22166bcb5ed367827f2147e80762a5`)
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
      <GeoCoding handler={handleLoc}/>
      <Manager/>
      </>
   )

}

export default App
