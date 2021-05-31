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

export default function AddUserPage(props) {
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

                        <ItemActivity activity={"Shahzaib (FA17-BCS-084) added a new receipt"} time={"29 min ago"}/>
                        <ItemActivity activity={"Ehtisham UL Hassan (FA17-BCS-063) posted a new comment "} time={"35 min ago"}/>
                        <ItemActivity activity={"Ehtisham UL Hassan (FA17-BCS-063) added a new receipt"} time={"1 hour ago"}/>
                        <ItemActivity activity={"Shahzaib (FA17-BCS-063) posted a new comment"} time={"Yesterday"}/>


                    </main>

                </div>


            </div>
        </div>
    );
}


