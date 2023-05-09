import { useState } from "react"

import Formulario from "./Components/Formulario";
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./Components/Formulario";

//El uso de los 3 puntos antes de una variable es usado para pasar las propiedades que hay en esa variable 
//y permitir que sean usadas dentro del componente que se requiere
//para así no sobreescribir código sino reutilizar las propiedades de la variable a la cual se le agregan
//los 3 puntos

//Un ejemplo de la vida cotiana sería como cuando se está jugando en Pokemon Go y una misma cuenta de entrenador
//captura diferentes tipos de pokemon, pero todos son del mismo entrenador

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (

    <div className='container mx-auto mt-20 '>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}/>
        <ListadoPacientes />
        
      </div>

    </div>
  )
}

export default App
