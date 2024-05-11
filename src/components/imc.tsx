'use client'
import { useState } from 'react'

export default function Imc() {
  const [heigth, setHeigth] = useState('')
  const [weigth, setWeigth] = useState('')
  const [imc, setImc] = useState('')

  const calculateImc = () => {
    const heigthFormatted = Number(heigth) / 100
    const total = (
      Number(weigth) /
      (heigthFormatted * heigthFormatted)
    ).toFixed(2)

    setImc(total)
  }

  return (
    <>
      <label>Altura</label>
      <input
        type="text"
        value={heigth}
        onChange={(event) => setHeigth(event.target.value)}
      />
      <label>Peso</label>
      <input
        type="text"
        value={weigth}
        onChange={(event) => setWeigth(event.target.value)}
      />
      <button onClick={calculateImc}>Calcular</button>
      {imc && <p>IMC: {imc}</p>}
    </>
  )
}
