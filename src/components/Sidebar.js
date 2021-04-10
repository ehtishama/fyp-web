import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";

import {MdHome, MdFace, MdBook, MdPowerSettingsNew} from 'react-icons/md';

export default function Sidebar(props) {
    function signOut(e) {
        firebase.auth().signOut();
    }

    return <aside className={"sidebar fixed h-full w-72 shadow p-4 text-white"}>

        <ul className={"relative mt-6"}>
            <li>
                <Link to={'/home'}>
                    <button className={"p-4 bg-purple-400 block text-left rounded flex align-center "}>
                        <MdHome size={'1.5em'}/>
                        <p className={'pl-3'}>Home</p>
                    </button>
                </Link>
            </li>
            <li>
                <Link to={'new-user'}>
                    <button className={"p-4  hover:bg-purple-400 block text-left mt-2 rounded flex align-center"}>
                        <MdFace size={'1.5em'}/>
                        <p className={'pl-3'}>Students</p>
                    </button>
                </Link>
            </li>
            <li>
                <Link to={'receipts'}>
                    <button className={"p-4  hover:bg-purple-400 block text-left mt-2 rounded flex align-center"}>
                        <MdBook size={'1.5em'}/>
                        <p className={'pl-3'}>Receipts</p>
                    </button>
                </Link>
            </li>
            <li>
                <button
                    className={"p-4 hover:bg-purple-400 text-left mt-2 rounded self-end fixed bottom-4 flex align-center"}
                    onClick={signOut}

                >
                    <MdPowerSettingsNew size={'1.5em'}/>
                    <p className={'pl-3'}>Sign out</p>
                </button>
            </li>
        </ul>
    </aside>
}