import React from 'react'

const Error = ({mensajedeerror}) => {
  return (
    <div className='bg-blue-700 text-center text-black rounded-md uppercase font-bold mb-3 pd-3'>
        
        <p>{mensajedeerror}</p>
        
        </div>
  )
}

export default Error