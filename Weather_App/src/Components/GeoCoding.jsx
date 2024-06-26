import React, { useState } from "react";

function GeoCoding(props) {
    const [data, setData] = useState([]);
    const [loc, setLoc] = useState("");

    function handleClick() {
        if(loc){
        setLoc("");
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=3&appid=09e876728d98d5b64f440c7f47373d6e`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data);
            })
            .catch((err) => console.log(err.message));
        }
    }
    function location(event) {
        setLoc(event.target.value);
    }
    return (
        <div>
            <div className="flex items-center justify-center">
                <input type="text" id="first_name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-80 md:width-50 mr-0.5" value={loc} onChange={location} placeholder="Enter Country/City name..." required />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-15" onClick={handleClick}>Search</button>
            </div>
            <div className="my-2">
                { data[0]?  <h1 className="font-mono">Search Results(Click to view):</h1> : <></>
                // <h1 className="font-mono">Search Results(Click to view):</h1>
                }
                <ul >
                    {data ? data.map((loc, index) => <li className ="max-w-lg w-fit" key={index}><div className="no-underline hover:underline hover:cursor-pointer" onClick={() => props.handler(loc.lat, loc.lon)}> {loc.name}, {loc.state}, {loc.country}</div> </li>) : <div>Loading ...</div>}
                </ul>
            </div>
        </div>
    )
}



export default GeoCoding