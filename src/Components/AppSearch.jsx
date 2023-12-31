import React, { useState, useRef } from 'react'
import axios from 'axios'
import { FaSearchLocation } from 'react-icons/fa'
import { SiExpressvpn } from 'react-icons/si'
import { WiHumidity, WiDayWindy } from 'react-icons/wi'
// import imageUrl from '../assets/partly cloud icon.jpg'

function AppSearch() {

    // const [cityName, setCityName] = useState(); //2: It is not also prefered way
    const inputRef = useRef(null)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)





    const getWeather = async (event) => {
        event.preventDefault();

        // const cityName = document.querySelector('#input-field').value  => 1: not preferred way 
        // console.log(cityName)
        // console.log(`getting weather of ${cityName}...`)

        // input sein value uthana hotw recommended hein ref 3: useRef
        console.log(`getting weather of ${inputRef.current.value}...`)

        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=7bcce156f9ec46b8988151742232808&q=${inputRef.current.value}&aqi=no`)
            console.log("response", response.data);

            setIsLoading(false)

            setData([response.data, ...data])

            event.target.reset();
        }


        catch (error) {
            setIsLoading(false)
            console.log(error)
        }

    }




    // const changeHandler = (event) => {
    //     setCityName(event.target.value);
    //     console.log('ChangeHandler:', event.target.value) //2: It is not also prefered way
    // }

    // const AppSearch = ({ weatherCondition }) => {
    //     let imageUrl;

    //     switch (weatherCondition) {
    //         case 'sunny':
    //             imageUrl = 'sunny.jpg';
    //             break;
    //         case 'cloudy':
    //             imageUrl = 'cloudy.png';
    //             break;
    //         case 'rainy':
    //             imageUrl = 'rainy.png';
    //             break;
    //         default:
    //             imageUrl = 'default.png';
    //     }


    // }

    return (

        <div className='main-container'>

            <form onSubmit={getWeather}>
                <div className='welcome mt-5 my-5 p-5 '>
                    <div className="input-group ">
                        <span className="input-group-text " id="basic-addon1">
                            <FaSearchLocation />
                        </span>
                        <input id='input-field'
                            maxLength={20}
                            minLength={2}
                            required
                            type="search"
                            className="form-control"
                            placeholder="Search City"
                            aria-label="SearchCity"

                            aria-describedby="basic-addon1" ref={inputRef} />
                    </div>
                    <div className='main-btn' >
                        <button className='btn btn-light my-5' type='submit'>Search</button>

                    </div>
                </div>

            </form>


            {/* Loading and handling with no data code here */}

            <div className='current'>
                {isLoading ? <div>It will take a while to load</div> : null}

                {data.length ? (
                    data.map((eachWeatherData, index) => (
                        <div className="Container" key={index}>
                            <div className="row colorWhite">
                                <div className="col">
                                    <div className='result'>
                                        <h4>Current Weather</h4>
                                        <div className='cityName'>
                                            CityName: {eachWeatherData?.location?.country} {eachWeatherData?.location?.name}
                                        </div>
                                        <br />
                                        <div className='temperature'>
                                            <img id='weather-icon' src={`https:${eachWeatherData?.current?.condition?.icon}`} alt="" /> {eachWeatherData?.current?.temp_c}℃ {eachWeatherData?.current?.temp_f}℉
                                        </div>
                                        <br />
                                        <div className='condition'>
                                            {eachWeatherData?.current?.condition?.text}
                                        </div>

                                    </div>
                                </div>
                                <div className='col'>
                                    Feels Like {eachWeatherData?.current?.temp_c}℃ {eachWeatherData?.current?.temp_f}℉
                                    <div className="row small-icon">
                                        <div className="col">
                                            <WiHumidity /> Humidity: {eachWeatherData?.current?.humidity}
                                        </div>
                                    </div>
                                    <div className="row small-icon">
                                        <div className="col">
                                            <WiDayWindy /> Wind: {eachWeatherData?.current?.wind_kph}
                                        </div>
                                    </div>
                                    <div className="row small-icon">
                                        <div className="col">
                                            <SiExpressvpn /> Pressure: {eachWeatherData?.current?.pressure_in}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                )


                    : "To see current weather of any city do filled input."}

            </div>





        </div>

    )
}

export default AppSearch
