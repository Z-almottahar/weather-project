import Image from "next/image";
import sun from "../../public/images/sun.png"
import search from "../../public/images/search.png"
import { useState } from "react";

const Left = ({weather,handleClick}) => {

const [cityName,setCityName]=useState('');
    return (
    <div className="whole" >
        <div className="leftContainer">
            <h5 className="title">the.weather</h5>
             <div className="currentWeather">
                     {weather.main?<h1 className="temp">{weather.main.temp.toFixed()}°</h1>:null}

                    <div className="city">
                    {weather?<h2 className="cityName">{weather.name }</h2>:null}

                        <h5 className="date"><span className="time">10:36</span> - <span className="date">Tuesday, Oct 2022</span> </h5>

                    </div>
                        <div className="weather">
                        {weather.weather?<img width="150px" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="icon" alt="/" width={70} height={70} />:null}
                        <span className="condition">{weather.weather[0].main}</span>
                        </div> 

                </div>
            
        </div>

        <div className="rightList">
        <div action="input" className="input">
            <input type="text" className="search" placeholder="Another location" onChange={(e)=>{handleClick(e.target.value); setCityName(e.target.value)}} />
            <button type="submit" className="submit" onClick={()=>{handleClick(cityName)}}>
                <Image src={search} alt="search" width={35} height={35}/>
            </button>
        </div>

        <ul className="cities">
            <li className="city" onClick={()=>{handleClick("Birmingham")}}>Birmingham</li>
            <li className="city" onClick={()=>{handleClick("Manchester")}}>Manchester</li>
            <li className="city" onClick={()=>{handleClick("New York")}}>New York</li>
            <li className="city" onClick={()=>{handleClick("California")}}>California</li>
        </ul>

        <ul className="details">
            <h4>Weather Details</h4>
            <li>
                <span>Cloudy</span>
                  {weather.clouds?<span className="cloudy"> {weather.clouds.all}%</span>:null}
            </li>
            <li>
                <span>Humidity</span>
                 {weather.main? <span className="humidity">{weather.main.humidity}%</span>:null}
            </li>
            <li>
                <span>Wind</span>
                {weather.wind? <span className="wind">{weather.wind.speed}km/h</span>:null} 
            </li>
            <li>
                <span>Visibility</span>
                {weather.main? <span className="visibility">{weather.visibility}</span>:null}
            </li>
        </ul>
        </div>
        
    </div>)
};

export default Left