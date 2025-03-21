import { useState } from 'react'
import './App.css'

function App() {
    const [info, setInfo] = useState('')

    const handleShowInfo = () => {
        setInfo('Nombre: Allan Gómez | Carnet: 202005035 | Curso: Análisis y Diseño de Sistemas 1')
    }

    return (
        <div className="container">
            <h1>Tarea 2</h1>
            <h2>Información Personal</h2>
            <button onClick={handleShowInfo}>Mostrar Información</button>
            {info && <p className="info">{info}</p>}
        </div>
    )
}

export default App
