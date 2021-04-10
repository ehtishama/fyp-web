import React from 'react';

function Receipt(props) {

    const receiptData = props.receipt

    function receiptStatus()
    {
        let possibilities = ['pending', 'accepted', 'rejected']
        let randIndex = Math.round(Math.random() * (possibilities.length - 1) )
        let status = possibilities[randIndex]
        return status
    }
    return (
        <div
            className="rounded-lg bg-white overflow-hidden my-2 border border-gray-200 card_receipt relative cursor-pointer hover:shadow-lg">
            <img className="receipt_img mx-auto rounded-lg" src={'https://www.publicdomainpictures.net/pictures/30000/t2/plain-white-background.jpg'}/>
            <div className="p-2 px-3">
                <p className="font-700 text">Ehtisham UL Hassan</p>
                <p className={'text-sm text-gray-600 mb-1'}>FA17-BCS-063</p>
                <p className="text-sm text-gray-400">
                    5 mins ago
                </p>
            </div>

            <span className={'absolute top-0 right-0 b bg-purple-500 rounded-l-full text-xm text-white px-3 mt-2 capitalize'}>
                { receiptStatus() }
            </span>

        </div>
    );
}

export default Receipt;