import { useEffect, useState } from 'react'
import './App.css'
import { WeatherForm } from './components/WeatherForm'
import { WeatherInformation } from './components/WeatherInformation'
import { URL_API_WEATHER } from './utils'

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    apiWeather()
  }, [])

  function apiWeather(city = 'London') {
    const KEY_API = import.meta.env.VITE_API_KEY
    try {
      fetch(`${URL_API_WEATHER}${city}&appid=${KEY_API}&lang=es`)
        .then((res) => res.json())
        .then((data) => setWeather(data))
    } catch (error) {
      console.log('Error')
    }
  }

  const changeCity = (city) => {
    apiWeather(city)
  }

  return (
    <div className="flex flex-col items-center justify-center container w-full px-4">
      <WeatherForm changeCity={changeCity} />
      {weather && <WeatherInformation weather={weather} />}
    </div>
  )
}

export default App
