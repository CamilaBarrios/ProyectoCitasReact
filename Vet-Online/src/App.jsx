import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"


function App() {

  return (
    <div className='container mx-auto mt-20 '>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
         

      </div>

    </div>
  )
}

export default App