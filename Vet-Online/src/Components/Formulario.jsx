import { useState, useEffect } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Infomacion del usuario.....');
        console.log('El nombre de la mascota es= \n ',nombre,'  \n El nombre del propietario es= \n ',propietario,' \n El email del propietario es= \n',email,'\n La fecha es= \n',fecha,'\n Sus sintomas son= \n ',sintomas);

    }


    return (
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-3xl text-indigo-700 text-center">Seguimiento Pacientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Añade Pacientes y {""}
                    <span className="text-indigo-600 font-bold text-lg">Administralos</span>
                </p>

                <form className="bg-white shadow-md rounded-lg py-10 px-5"
                    onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-5">
                            <label htmlFor="mascota" className="block text-gray-600 uppercase font-bold">
                                Nombre Mascota:
                            </label>
                            <input id="mascota" type="text" name="nombre" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                onChange={(e) => (setNombre(e.target.value))}
                                value={nombre} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="propietario" className="block text-gray-600 uppercase font-bold">
                                Nombre Propietario:
                            </label>
                            <input id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                onChange={(e) => (setPropietario(e.target.value))}
                                value={propietario} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-gray-600 uppercase font-bold">
                                Email Propietario:
                            </label>
                            <input id="email" type="email" placeholder="Email del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                onChange={(e) => (setEmail(e.target.value))}
                                value={email} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="fecha" className="block text-gray-600 uppercase font-bold">
                                Fecha de Ingreso:
                            </label>
                            <input id="fecha" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                onChange={(e) => (setFecha(e.target.value))}
                                value={fecha} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="sintomas" className="block text-gray-600 uppercase font-bold">
                                Sintomas:
                            </label>
                            <textarea id="sintomas" className="border-2 w-full p-2 mt-2
                             placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"
                             onChange={(e)=>(setSintomas(e.target.value))}
                        value={sintomas} /> 
                        </div>
                        <input type="submit" className="bg-indigo-600 w-full p-3 
                        text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-colors"
                        /> 



                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario