import { useState } from 'react'

export function WeatherForm({ changeCity }) {
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
    setCity('')
  }

  return (
    <div className="py-4 text-center w-full max-w-lg">
      <h1 className="text-3xl font-extrabold mb-4">INGRESE EL DESTINO</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-x-5 min-w w-full m-auto "
      >
        <input
          className="border-black/50 border rounded-lg px-3 py-1 flex-1 text-black"
          onChange={handleChange}
          value={city}
          type="text"
          name="text"
          placeholder="Ingrese el pais"
        />
        <button className="border-none rounded-lg px-4 py-1 bg-violet-700 text-white hover:bg-violet-700/60 font-semibold">
          Ver
        </button>
      </form>
    </div>
  )
}
