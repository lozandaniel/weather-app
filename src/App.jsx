import { useEffect, useState } from 'react'
import './App.css'
import WeatherForm from './components/WeatherForm'
import WeatherInformation from './components/WeatherInformation'

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    apiWeather()
  }, [])

  function apiWeather(city = 'London') {
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=`
    const KEY_API = import.meta.env.VITE_API_KEY
    try {
      fetch(`${URL_API}${city}&appid=${KEY_API}&lang=es`)
        .then(res => res.json())
        .then(data => setWeather(data))
    } catch (error) { }
  }

  const changeCity = (city) => {
    apiWeather(city)
  }

  return (
    <div className='flex flex-col items-center justify-center container w-full px-4'>
      <WeatherForm changeCity={changeCity} />
      {weather && (<WeatherInformation weather={weather} />)}
    </div>
  )
}

export default App
