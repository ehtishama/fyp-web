import React, {useRef, useState} from 'react'
import firebase from "firebase";
import {Dialog, DialogTitle, DialogActions, DialogContent, Button, Typography} from "@material-ui/core";
import MasterPage from "../views/MasterPage";


function NewUserForm(props) {

    let database = firebase.database()
    let [dialogState, setDialogState] = useState(false)

    let emailRef = useRef()
    let regRef = useRef()
    let nameRef = useRef()

    function handleCreateNewUserForm(e) {
        e.preventDefault();
        setDialogState(true)

        const email = emailRef.current.value

        if (email === "" || email == null) {
            console.log("incorrect credentials", email)
            return;
        }

        let database = firebase.database().ref('students')

        database.push().set({
            'email': emailRef.current.value
        }).then(() => {

            setDialogState(true)

        })

    }

    function addNewStudent()
    {
        let newStudent = {

            name: nameRef.current.value,
            regNo: regRef.current.value,
            email: regRef.current.value

        }
        database.ref("students").push().set(newStudent).then(() => {

            setDialogState(true)

        })

    }


    function handleDialogClose(e) {
        setDialogState(false)
    }


    return (



        <MasterPage>

            <h2 className={'text-3xl p-2 m-3 font-bold text-gray-700'}>
                Add new user
            </h2>

            <div className={' bg-white p-6 w-96 shadow p-4'}>



                    <input ref={emailRef} type="email" placeholder={"Official email address"}
                           className={"border rounded mb-2 p-2 focus:border-gray-400 block"} required/>

                    <input ref={nameRef} type="text" placeholder={"Student Name"}
                           className={"border rounded mb-2 p-2 focus:border-gray-400 block"} required/>

                    <input ref={regRef} type="text" placeholder={"Student Reg #"}
                           className={"border rounded mb-2 p-2 focus:border-gray-400 block"} required/>

                    <button type="submit" value={"Create user"}
                            className={"p-2 w-full hover:bg-purple-800 cursor-pointer font-medium bg-indigo-500 text-white rounded"}
                            onClick={addNewStudent}
                    >
                        Create user
                    </button>



                {/*success dialog*/}
                <Dialog onClose={handleDialogClose} aria-labelledby="customized-dialog-title" open={dialogState}>
                    <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
                        Success
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            New user has been added successfully.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleDialogClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>

        </MasterPage>
    )

}

export default NewUserForm