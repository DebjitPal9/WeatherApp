import React, { useState } from "react";

function GeoCoding() {
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
            <input type="text" value={loc} onChange={location} />
            <button onClick={handleClick}>Get data</button>
            {data ? data.map((loc, index) => <div key={index}> {loc.name}, {loc.state}, {loc.country}</div>) : <div>Loading ...</div>}
        </div>
    )
}



export default GeoCoding