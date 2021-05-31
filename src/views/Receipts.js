import React, {useEffect, useState} from "react";
import firebase from "firebase";

import MasterPage from "./MasterPage";
import Receipt from "../components/Receipt";
import Chip from "../components/Chip/Chip";
import Separator from "../components/Separator/Seperator";

export default function Receipts() {
    const database = firebase.database();
    const [receipts, setReceipts] = useState([])

    useEffect(() => {

        database.ref("/receipts")
            .once("value", (snapshost) => {
            const _receipts = []
            snapshost.forEach(receipt => {
                _receipts.push(receipt.val())
            })
            setReceipts([...receipts, ..._receipts])

        })

    }, [])

    return (
        <MasterPage>
            <h2 className={'text-3xl p-2 m-3 font-bold text-gray-700'}>
                Receipts
            </h2>

            <div className={'flex'}>
                <Chip text={'All'} selected={'selected'}/>
                <Chip text={'Pending'}/>
                <Chip text={'Accepted'}/>
                <Chip text={'Rejected'}/>
            </div>

            <Separator title={'Today'}/>

            {/*list of chips*/}
            <div className="flex flex-wrap ">
                {
                    receipts.map((receipt) => {
                        return <div className={'mr-1'}><Receipt receipt={receipt}/></div>
                    })
                }
            </div>

            <Separator title={'Last 7 days'}/>

            <div className="flex flex-wrap ">
                {
                    receipts.map((receipt) => {
                        return <div className={'mr-1'}><Receipt receipt={receipt}/></div>
                    })
                }
            </div>

        </MasterPage>
    )


}