import React from "react";

const Box = (props) => {

    return (
        <div onClick={props.onClick} className="box flex justify-center items-center border hover:bg-gray-400 duration-500 border-gray-300 w-32 h-32 font-bold text-4xl text-white bg-orange-400">{props.value}</div>
    )
}

export default Box