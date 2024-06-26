import React, { useState } from "react";

function GeoCoding(props) {
    const [data, setData] = useState([]);
    const [loc, setLoc] = useState("");

    function handleClick() {
        setLoc("");
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=3&appid=09e876728d98d5b64f440c7f47373d6e`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data);
            })
            .catch((err) => console.log(err.message));
    }
    function location(event) {
        setLoc(event.target.value);
    }

    return (
        <div>
            <div className="max-w-lg">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={loc} onChange={location} placeholder="Enter Country/City name..." required />
                <dir></dir>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Search</button>
            </div>
            <p>
                <h2 className="font-mono font-bold">Search Results(Click to view):</h2>
                <ul >
                    {data ? data.map((loc, index) => <li className ="max-w-lg"><div className="no-underline hover:underline hover:cursor-pointer" onClick={() => props.handler(loc.lat, loc.lon)} key={index}> {loc.name}, {loc.state}, {loc.country}</div> </li>) : <div>Loading ...</div>}
                </ul>
            </p>
        </div>
    )
}



export default GeoCoding