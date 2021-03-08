import React, {useEffect, useState} from "react";
import firebase from "firebase";
import Receipt from "../Components/Receipt";

export default function Receipts() {
    const database = firebase.database();
    const [receipts, setReceipts] = useState([])

    useEffect(() => {

        database.ref("/").once("value", (snapshost) => {
            const _receipts = []

            snapshost.forEach(node => {
                const singleUserReceipts = node.child("receipts")
                singleUserReceipts.forEach(receipt => {
                    _receipts.push(receipt.val())
                    console.log(receipt.val())
                })
            })
            setReceipts([...receipts, ..._receipts])

        })

    }, [])

    const element = receipts.map((receipt) => {
        return <div><Receipt receipt={receipt} /></div>
    })

    return element

}