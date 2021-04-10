import React from "react";

export default function Separator(props) {
    return (
        <div className={'my-5 mx-1 flex items-center'}>
            <p className={'mr-3 font-bold text-sm text-gray-700 flex-none'}>{ props.title }</p>
            <div className={'bg-gray-700 rounded w-full'} style={{ height: 2}}/>
        </div>
    )
}