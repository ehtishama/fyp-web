import React from 'react';
import {Link} from "react-router-dom";
import moment from "moment";

function Receipt(props) {

    const receiptData = props.receipt

    let statusColor = receiptData.status.toLowerCase() == "pending" ? "bg-yellow-700" : "bg-green-600"


    function receiptStatus() {
        // let possibilities = ['pending', 'accepted', 'rejected']
        // let randIndex = Math.round(Math.random() * (possibilities.length - 1))
        // let status = possibilities[randIndex]
        // return status

        return receiptData.status

    }

    return (

        <Link to={ 'receipt_details/' + receiptData.receiptId}>
            <div
                className="rounded-lg bg-white overflow-hidden my-2 border border-gray-200 card_receipt relative cursor-pointer hover:shadow-lg">
                <img className="receipt_img mx-auto rounded-lg"
                     src={receiptData.url}/>
                <div className="p-2 px-3">
                    <p className="font-700 text mb-1">{ receiptData.studentName }</p>
                    <p className={'text-sm text-gray-500 mb-2'}>{receiptData.regNo}</p>
                    <p className="text-sm text-gray-400">
                        { moment(receiptData.timestamp).fromNow() }
                    </p>
                </div>

                <span
                    className={`absolute top-0 right-0 b rounded-l-full text-xm text-white px-3 mt-2 capitalize ${statusColor}`}>
                {receiptStatus()}
            </span>

            </div>
        </Link>
    );
}

export default Receipt;