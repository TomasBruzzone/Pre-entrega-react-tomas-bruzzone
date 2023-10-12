import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'



function App() {
  const [count, setCount] = useState(0)
  const titulo1 = 'Donaciones'
  const tiutlo2 = 'Deja tu mail y te enviamos novedades todas las semanas.'

  return (
    <>
       <NavBar />
       <Titulo titulo='Proyecto Bruzz' subTitulo= 'Videojuegos tipo indie.'/>
       
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dolares {count}
        </button>
        
      </div>
      <Titulo titulo={titulo1} subTitulo={tiutlo2} parrafo='Todo lo donado ayuda a mejorar el rendimiento de los servidores.'/>
      <Formulario />
      <Footer />
     
    </>
  )
}

export default App
