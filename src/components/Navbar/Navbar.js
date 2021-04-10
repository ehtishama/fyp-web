import React from "react";
import userLogo from '../../assets/user.svg'
import {MdKeyboardArrowDown} from 'react-icons/md'

export default function Navbar(props) {
    return (
        <nav className={'p-3 bg-white shadow w-full'}>

            <div className={'flex align-center justify-between pl-12 pr-3'}>

                <div className={'justify-start'}>
                    <h2 className={'text-2xl font-bold text-gray-600'}>
                        Fee App
                    </h2>
                </div>
                <div className={'justify-end flex items-center'}>

                    <div className={'w-9 h-9 bg-purple-200 rounded-full p-1 mr-2 shadow'}>
                        <img src={userLogo} alt="" className={'h-full w-full'}/>
                    </div>

                    <span className={'cursor-pointer'} >
                        <MdKeyboardArrowDown size={'1.4em'}/>
                    </span>
                </div>

            </div>

        </nav>
    )
}