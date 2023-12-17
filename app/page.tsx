"use client"

import Image from 'next/image'
import InputField from '@/components/inputField/InputField'
import FormButton from '@/components/formButton/FormButton'
export default function Home() {

  function onSumbit (event) {
    event.preventDefault()
    
    // console.log('submit')
    // console.log(event.target.value)
  }

  return (
    <div className="max-w-md mx-auto mt-[250px]">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <InputField name="Name" />
      <InputField name="Email" />
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Message
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
      </div>
      <div className="flex items-center justify-between">
        <FormButton onClickHandler= {onSumbit} />
      </div>
    </form>
  </div>
  
  )
}
