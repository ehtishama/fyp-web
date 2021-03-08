import { Box, Button, TextField } from "@material-ui/core";
import React, {useEffect, useRef, useState} from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import Receipts from "./Receipts";


function isEmpty(str)
{
    if(str == null || str === "")
        return true
    else return false
}

export default function Home(props) {
    const isLoggedIn = props.user != null;
    const database = firebase.database()

    const emailRef = useRef()
    const passwordRef = useRef()

    function handleCreateNewUserForm(e)
    {
        e.preventDefault();

        const email = emailRef.current.value
        const password = passwordRef.current.value

        if(isEmpty(email) || isEmpty(password))
        {
            console.log("incorrect credentials")
            return;
        }
        console.log("current user: ", firebase.auth().currentUser.email)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in
                // ...
                console.log("Account created.")
                console.log("current user: ", firebase.auth().currentUser.email)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..

                console.log("Error while creating account")
            });

    }

    function signOut(e)
    {
        firebase.auth().signOut();
    }

    return (
        <div className={"bg-gray-100 h-full"}>
            {!isLoggedIn && <Redirect to="/login"/>}
            <div className={"container mx-auto h-full"}>


                <div className={"flex h-full"}>
                    <aside className={"h-full w-80 bg-white shadow p-6 bg-blue-600 text-white"}>

                        <div className="logo">
                            <h2 className={"text-4xl font-black text-center my-4"}>
                                Fee App
                            </h2>
                        </div>

                        <ul className={"divide-y"}>
                            <li><button className={"p-3 font-semibold hover:bg-blue-800 block text-left "}>Home</button></li>
                            <li><button className={"p-3 font-semibold hover:bg-blue-800 block text-left mt-2"}>Create new user</button></li>
                            <li><button className={"p-3 font-semibold hover:bg-blue-800 block text-left mt-2"}>List receipts</button></li>
                            <li>
                                <button
                                className={"p-3 font-semibold hover:bg-blue-800 block text-left mt-2"}
                                onClick={signOut}
                                >
                                Sign out
                            </button>
                            </li>
                        </ul>
                    </aside>
                    <main className={"h-full p-4 bg-white w-full"}>
                        {/*create new user*/}
                        <h2 className={"text-4xl mb-6 font-black text-gray-700 antialiased tracking-normal"}>
                            Create new user
                        </h2>

                        <form action="" onSubmit={handleCreateNewUserForm}>
                            <input ref={emailRef} type="text" placeholder={"Email"} className={"border rounded mb-2 p-2 focus:border-gray-400 block"}/>
                            <input ref={passwordRef} type="password" placeholder={"Password"} className={"border rounded mb-2 p-2 focus:border-gray-400 block"}/>
                            <button type="submit" value={"Create user"} className={"p-2 hover:bg-blue-800 cursor-pointer font-medium bg-blue-600 text-white rounded"}> Create user</button>


                        </form>
                        {/*list of receipts*/}
                        <Receipts />



                    </main>
                </div>


            </div>
        </div>
    );
}


