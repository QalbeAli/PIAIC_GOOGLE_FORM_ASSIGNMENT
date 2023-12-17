"use client";
import React, { useState } from "react";
import DisplayData from "@/components/displayData/DisplayData";


interface onChangeEventType {
  target: {name:string, value:string};
}

interface ContactType {
  name: string;
  email: string;
  message:string

}

// 


const Page = () => {
  const [contactInfo, setContactInfro] = useState<ContactType>({
    name: "",
    email: "",
    message:""
  });

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
        ...contactInfo,
        [e.target.name]:e.target.value

    }
    setContactInfro(userDetails)
};

const handleSubmit = async () => {

    const formData = new FormData()

    formData.append('entry.394758539',contactInfo.name)
    formData.append('entry.2127475459',contactInfo.email)
    formData.append('entry.419214708',contactInfo.message)

    try {
       const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdExviuzcMmirhJO3EgfRcbDmI9jA-pIJSqNr77BXcEK2dZrA/formResponse", {
        method:'POST',
        body:formData,
        mode:"no-cors"
       })
       if(response.ok){
        alert("Data Sumbit Successfully");
        
       } else {
        alert("Data Submitting Error")
       }

    } catch (error) {
        console.log(error);
        
    }
    setContactInfro({
        name:"",
        email:"",
        message:""
    })
}


  return (
    <>
      <div className="max-w-md mx-auto mt-[200px]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              name="message"
              required
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
            onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-white text-center font-bold text-4xl">Here is the result of Data</h1>
      <DisplayData contactData = {contactInfo} />
    </>
  );
};

export default Page;
