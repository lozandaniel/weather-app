export function WeatherInformation({ weather }) {
  const tempKelvinToCelsius = () => {
    let temp = weather?.main?.temp
    if (temp !== undefined) {
      return Math.ceil(temp - 273.15)
    }
  }

  return (
    <div className="bg-zinc-700 container w-full max-w-lg flex items-center py-20 rounded-lg">
      <div className="w-3/5 text-center">
        <h2 className="font-bold text-3xl">{weather?.name}</h2>
        <div className="flex items-center justify-center">
          <p className="text-2xl font-semibold">{tempKelvinToCelsius()}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
            alt="weather icon"
            className="w-12 h-12"
          />
        </div>
        <p className="capitalize">{weather?.weather?.[0]?.description}</p>
      </div>
      <div className="capitalize flex flex-col gap-y-3">
        <p>Temperatura max {(weather?.main?.temp_max - 273.15).toFixed(1)}°C</p>
        <p>Temperatura min {(weather?.main?.temp_min - 273.15).toFixed(1)}°C</p>
        <p>Humedad {weather?.main?.humidity}%</p>
      </div>
    </div>
  )
}
