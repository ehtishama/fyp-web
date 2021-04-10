import React from "react";
import {MdFace} from 'react-icons/md'

export default function ItemActivity() {
    return (
        <div className={'bg-white p-4 flex items-center rounded mb-1 mx-1'}>

            <MdFace size={'2.2em'} color={'#7c4dff'}/>

            <div className={'ml-4'}>
                <p className={'text-gray-600'}>Ehtisham UL Hassan (FA17-BCS-063) uploaded a new receipt</p>
                <p className={'text-sm text-gray-400'}>5 sec ago</p>
            </div>

            <button
                className={'ml-auto px-4 text-sm p-2 rounded border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white '}> View
            </button>

        </div>
    )
}