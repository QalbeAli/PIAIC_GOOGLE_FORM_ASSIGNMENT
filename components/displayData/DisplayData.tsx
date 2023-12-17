import React from 'react'

interface PropsType {
  name:string,
  email:string
  message:string
}

const DisplayData = (props:{contactData:PropsType}) => {
  
  return (
    <>
    <h1 className='text-center font-bold text-xl'>{props.contactData.name}</h1>
    <h1 className='text-center font-bold text-xl'>{props.contactData.email}</h1>
    <h1 className='text-center font-bold text-xl'>{props.contactData.message}</h1>
    </>
  )
}

export default DisplayData