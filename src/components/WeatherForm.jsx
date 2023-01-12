import { useState } from "react"

function WeatherForm({ changeCity }) {
  const [city, setCity] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if (value !== '') {
      setCity(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    changeCity(city)
  }

  return (
    <div className="py-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Ingrese el país que desea conocer el clima</h1>
      <form onSubmit={handleSubmit} className='flex justify-center items-center gap-x-5 max-w-lg m-auto'>
        <input className="border-black/50 border rounded-lg px-4 py-1 flex-1 text-black" onChange={handleChange} type="text" name="text" placeholder="Ingrese el pais" />
        <button className="border rounded-lg px-4 py-1 bg-violet-700 text-white hover:bg-violet-700/60">Mostar</button>
      </form>
    </div>
  )
}

export default WeatherForm