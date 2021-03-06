import firebase from "firebase/app";
import "boxicons";
import "firebase/auth";
import Home from "./views/Home";
import Login from "./views/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import React, {useState} from "react";
import Receipts from "./views/Receipts";
import NewUserForm from "./components/NewUserForm";
import ReceiptDetails from "./views/ReceiptDetails";

function App() {
    initFirebase();

    const [user, setUser] = useState(null);
    firebase.auth().onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
    });

    return (
        <>
            <Switch>
                <Route path="/home">

                    <Home user={user}>
                        <NewUserForm/>
                    </Home>
                </Route>

                <Route path="/new-user">
                    <NewUserForm/>
                </Route>

                <Route path="/login">
                    <Login user={user}/>
                </Route>

                <Route path={"/receipts"}>
                    <Receipts/>
                </Route>

                <Route name="receipt_details" path={'/receipt_details/:receipt_id'}>
                    <ReceiptDetails/>
                </Route>

                <Route path="/">
                    <Home user={user}/>
                </Route>

            </Switch>
        </>
    );
}

function initFirebase() {
    // init firebase
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBLdy5VMdNG5cx6HN9qT4yBMg1bM9SeDf4",
        authDomain: "fyp-feeclearanceapp.firebaseapp.com",
        databaseURL: "https://fyp-feeclearanceapp.firebaseio.com",
        projectId: "fyp-feeclearanceapp",
        storageBucket: "fyp-feeclearanceapp.appspot.com",
        messagingSenderId: "855640955456",
        appId: "1:855640955456:web:ff9f86d9a3d8766abe1da5",
        measurementId: "G-QJHBEYMM6R",
    };

    if (firebase.apps.length > 0) return;

    else firebase.initializeApp(firebaseConfig);
}

export default App;
