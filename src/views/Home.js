import {Box, Button, TextField} from "@material-ui/core";
import React, {useEffect, useRef, useState} from "react"
import Navbar from "../components/Navbar/Navbar";

import {Redirect} from "react-router-dom";
import firebase from "firebase";
import Receipts from "./Receipts";
import NewUserForm from "../components/NewUserForm";
import Sidebar from "../components/Sidebar";
import ItemActivity from "../components/ItemActivity/ItemActivity";


export function isEmpty(str) {
    if (str == null || str === "")
        return true
    else return false
}

export default function Home(props) {
    const isLoggedIn = props.user != null;
    const database = firebase.database()


    return (
        <div className={"h-full"}>
            {!isLoggedIn && <Redirect to="/login"/>}
            <div className={"h-full"}>

                <Navbar/>

                <div className={"flex h-full"}>

                    <Sidebar/>

                    <main className={"ml-72 h-full p-4 w-full"}>

                        {/*{ props.children }*/}
                        {/* show list of receipts*/}

                        <h2 className={'text-3xl p-2 m-3 font-bold text-gray-700'}>
                            Activity
                        </h2>

                        {/*list of activities*/}

                        <ItemActivity />
                        <ItemActivity />
                        <ItemActivity />
                        <ItemActivity />

                    </main>

                </div>


            </div>
        </div>
    );
}


