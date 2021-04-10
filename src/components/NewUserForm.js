import React, {useRef, useState} from 'react'
import firebase from "firebase";
import {Dialog, DialogTitle, DialogActions, DialogContent, Button, Typography} from "@material-ui/core";


function NewUserForm(props) {

    let [dialogState, setDialogState] = useState(false)
    let emailRef = useRef()
    let passwordRef = useRef()

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

    function handleDialogClose(e) {
        setDialogState(false)
    }


    return (
        <div className={'w-96 shadow p-4'}>

            <h2 className={"text-4xl mb-6 font-black text-gray-700 antialiased tracking-normal"}>
                Create new user
            </h2>
            <form action="" onSubmit={handleCreateNewUserForm}>
                <input ref={emailRef} type="email" placeholder={"Email"}
                       className={"border rounded mb-2 p-2 focus:border-gray-400 block"} required/>
                <button type="submit" value={"Create user"}
                        className={"p-2 hover:bg-blue-800 cursor-pointer font-medium bg-blue-600 text-white rounded"}>
                    Create user
                </button>
            </form>


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
    )

}

export default NewUserForm