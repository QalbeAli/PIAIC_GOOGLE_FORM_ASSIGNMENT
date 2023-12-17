"use"
import React from "react";

interface PropsType {
    onClickHandler:() => void
}

const FormButton = (props:PropsType) => {
  return (
    <>
      <button
        onClick={props.onClickHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send
      </button>
    </>
  );
};

export default FormButton;
