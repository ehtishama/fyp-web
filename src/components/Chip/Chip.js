import React from "react";

export default function Chip(props) {
    return <div className={'bg-gray-100 text-gray-700 text-sm border-2 border-gray-200 px-6 py-2 m-1 rounded-full cursor-pointer ' + props.selected}>
        {props.text}
    </div>

}