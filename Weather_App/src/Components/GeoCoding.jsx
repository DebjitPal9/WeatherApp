import React, {useState} from "react";

function GeoCoding(){
    const [data, setData] = useState(null);


     function handleClick(){
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=09e876728d98d5b64f440c7f47373d6e')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch((err) => console.log(err.message));
    }

    return(
        <div>
            <button onClick={handleClick}>Get data</button>
            {data ? <div>{JSON.stringify(data)}</div> : <div>Loading ...</div>}
        </div>
    )
}



export default GeoCoding