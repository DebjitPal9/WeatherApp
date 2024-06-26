import React, {useEffect, useState} from 'react'


function Manager(props){
  //console.log(weather)
  if(props && props.weather){
  const weather = props.weather
  const d = new Date()
  const utc = d.getTime() + d.getTimezoneOffset() * 60000  + (1000 * weather.timezone)
  const newd = new Date(utc)
  return (
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs my-2">
        <div className="font-bold text-xl">{weather.name}, {weather.sys.country}</div>
        <div className="text-sm text-gray-500">{newd.getDate()}-{(newd.getMonth()<10)?'0'+newd.getMonth():newd.getMonth()}-{newd.getFullYear()}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          {/* <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg> */}
          <img className="rounded-full w-full" src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon"></img>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{Math.floor(weather.main.temp)}°</div>
          <div className="flex flex-col items-center ml-6">
            <div>{weather.weather[0].description}</div>
            <div className="mt-1">
              <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
              <span className="text-sm font-light text-gray-500">{weather.main.temp_max}°C</span>
            </div>
            <div>
              <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
              <span className="text-sm font-light text-gray-500">{weather.main.temp_min}°C</span>
            </div>
          </div>
        </div>
        <div className='text-center pt-2'>
          <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
          <span className="text-sm font-light text-gray-500">Feels Like: {weather.main.feels_like}°C</span>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{weather.wind.speed} m/s</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{weather.visibility/1000} km</div>
          </div>
        </div>
      </div>
  )}
  return (
    <div>Select Location to display weather</div>
  )
}

export default Manager
