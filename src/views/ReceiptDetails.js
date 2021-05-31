import React, {useEffect, useRef, useState} from "react";
import MasterPage from "./MasterPage";
import Separator from "../components/Separator/Seperator";
import firebase from "firebase";
import {useParams} from 'react-router-dom';

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import {comment} from "postcss";
import moment from "moment";

export default function ReceiptDetails(props) {

    let receiptDetails = props

    let {receipt_id} = useParams();
    let commentBox = useRef()

    const [receipt, setReceipt] = useState({userName: '', detectedText: '', status: '', timestamp: ''})
    const [comments, setComments] = useState([])
    const [isOpen, setOpen] = useState(false)

    let statusColor = ""
    statusColor = receipt.status.toLowerCase() == "pending" ? "text-yellow-500" : "text-green-500"

    let commentItems = comments.map((comment) =>
        <div className="p-2 mb-1 bg-white rounded shadow">
            <p className={'text-sm text-gray-400 mb-2'}>
                {comment.sender}
            </p>
            {comment.content}

        </div>
    )

    const database = firebase.database();

    useEffect(() => {

            // postComment("Hello")

            console.log("receipt id ", receipt_id)
            // get receipt
            database.ref("/receipts")
                .orderByChild("receiptId")
                .equalTo(receipt_id)
                .limitToFirst(1)
                .once("value", (snapshot) => {

                    snapshot.forEach(receipt => {
                        setReceipt(receipt.val())
                        console.log(receipt.val())
                    })

                })

            // get comments
            getComments()

        },
        [])


    function postComment(content) {
        let comment = {
            content: content,
            receiptId: receipt_id,
            sender: 'admin'
        }
        database.ref('comments').push()
            .set(comment)
            .then(() => {

                setComments([comment, ...comments])


            })
    }

    function getComments() {
        database.ref("/comments")
            .orderByChild("receiptId")
            .equalTo(receipt_id)
            .once("value", (snapshot) => {
                let _comments = []
                snapshot.forEach(comment => {
                    _comments.push(comment.val())
                })
                setComments([..._comments])
            })

        console.log("Comment fetch success")
        // console.log(comments)

    }

    function markReceiptAsAccepted() {
        database.ref("/receipts")
            .child(receipt_id)
            .child("status")
            .set("accepted")

            .then(() => {
                alert("Receipt has been marked as accepted")
            })

    }

    function commentFormSubmit(event) {
        let commentText = commentBox.current.value
        if (commentText.length > 0) {
            postComment(commentText)

            commentBox.current.value = ""
        }
    }

    function viewImageFullSize() {
        setOpen(true)
    }

    return (
        <MasterPage>

            <h2 className={'text-3xl p-2 m-3 font-bold text-gray-700'}>
                Receipt
            </h2>

            <div className="bg-white rounded shadow p-8">

                <div className="flex">

                    <div className={'w-72 h-80 bg-purple-500 mr-6 rounded-lg shadow relative receiptWrapper'}>

                        <img src={receipt.url} alt="" className={'w-full h-full overflow-hidden rounded hover'}/>

                        {isOpen && (
                            <Lightbox
                                mainSrc={receipt.url}
                                onCloseRequest={() => setOpen(false)}
                            />
                        )}

                        <div
                            className={'absolute w-full h-full bg-purple-600 top-0 left-0 receiptOverlay opacity-0 rounded'}>
                        </div>
                        <button onClick={viewImageFullSize}
                                className={"border-2 border-white absolute text-white p-2 font-bold text-lg rounded centerInDiv cursor-pointer opacity-0"}>
                            View full size image
                        </button>


                    </div>

                    <div>
                        <p className={'text-2xl text-purple-500 font-bold mb-4 border-b-2 border-purple-500 pb-2 inline-block'}>
                            {receipt.studentName}
                        </p>

                        <p className={'font-bold text-gray-700'}>Challan #</p>
                        <p className={'text-sm text-gray-600 mb-6'}>{receipt.challanNo}</p>

                        <p className={'font-bold text-gray-700'}>Reg#</p>
                        <p className={'text-sm text-gray-600 mb-6'}>{receipt.regNo}</p>

                        <p className={'font-bold text-gray-700'}>Uploaded at</p>
                        <p className={'text-sm text-gray-600 mb-6'}>{(new Date(receipt.timestamp)).toLocaleString("en-US")}</p>

                        <p className={'font-bold text-gray-700'}>Status</p>

                        <p className={`text-sm text-gray-600 mb-6 font-bold ${statusColor}`}>
                            {receipt.status.toUpperCase()}
                        </p>


                        <button
                            className={'text-purple-500 font-bold border-2 border-purple-500 py-2 px-6 rounded w-full hover:bg-purple-500 hover:text-white cursor-pointer'}
                            onClick={markReceiptAsAccepted}
                        >
                            Mark as Accepted
                        </button>

                    </div>

                </div>

            </div>


            <div className="flex">
                <div className="bg-white p-3 my-2 w-full shadow rounded mr-1">
                    <label htmlFor="issuedDate" className={"text-sm text-gray-400"}>Issue Date</label>
                    <input type="text" placeholder={"Issue Date"} className={"block w-full"} value={receipt.issueDate}/>
                </div>

                <div className="bg-white p-3 my-2 w-full shadow rounded ml-1">
                    <label htmlFor="dueDate" className={"text-sm text-gray-400"}>Due Date</label>
                    <input type="text" placeholder={"Due Date"} className={"block w-full"} value={receipt.dueDate}/>
                </div>

                <div className="bg-white p-3 my-2 w-full shadow rounded ml-1">
                    <label htmlFor="semester" className={"text-sm text-gray-400"}>Semester</label>
                    <input type="text" placeholder={"Due Date"} className={"block w-full"} value={receipt.semester}/>
                </div>


            </div>


            <Separator title={'Extracted text'}/>

            <div className={'bg-white rounded-lg shadow p-6 mb-2'}>

                <p className={'text-sm text-gray-500'}>
                    <pre>
                    {receipt != null ? receipt.detectedText : "Loading"}
                    </pre>
                </p>

            </div>

            <Separator title={'Comments'}/>

            <div className={'mb-3 relative'}>
                <input type="text" placeholder={'type something'} className={'p-3 rounded border block w-full'}
                       ref={commentBox}/>
                <input type="submit" value={'Post'}
                       className={'p-3 px-6 bg-purple-500 rounded-lg text-white absolute top-0 right-0'}
                       onClick={commentFormSubmit}/>
            </div>

            {/* comments list */}
            <div className={'mb-12'}>

                {commentItems}

            </div>

        </MasterPage>
    )
}