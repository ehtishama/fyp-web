import { Box, Button, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
import firebase from "firebase/app";
import "firebase/auth";

export default function Login(props) {
    const [inputDone, setInputDone] = useState(false);
    const usernameRef = useRef();
    const passwordRef = useRef();

    function inputChange(e) {
        if (
            usernameRef.current.value.length > 4 &&
            passwordRef.current.value.length > 0
        )
            setInputDone(true);
        else setInputDone(false);
    }

    function attemptSignIn(e) {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        console.log("username: ", username);
        console.log("password", password);
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((user) => {
                console.log("logged in successfully.");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className={"h-full bg-gray-100 pt-8"}>
            {props.user != null && <Redirect to="/home" />}

            <form action="" className="login-form bg-white">
                <Box textAlign="center">
                    <h2 className={"text-3xl font-black mb-4 text-blue-500"}>Fee App</h2>
                </Box>
                <Box m={1}>
                    <TextField
                        id="username"
                        label="username"
                        variant="outlined"
                        className="block mb-1"
                        inputRef={usernameRef}
                        onChange={inputChange}
                    />
                </Box>
                <Box m={1}>
                    <TextField
                        type="password"
                        id="username"
                        label="password"
                        variant="outlined"
                        className="block mb-1"
                        onChange={inputChange}
                        inputRef={passwordRef}
                    />
                </Box>

                <Box m={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!inputDone}
                        onClick={attemptSignIn}
                    >
                        Sign in
                    </Button>
                </Box>
            </form>
        </div>
    );
}
