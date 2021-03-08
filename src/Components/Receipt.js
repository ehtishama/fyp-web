import React from 'react';

function Receipt(props) {

    const receiptData = props.receipt

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img className="w-full" src={receiptData.url} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{receiptData.amount}</div>
                    <p className="text-grey-darker text-base">
                        {receiptData.transactionNum}
                    </p>
                </div>
                <div className="px-6 py-4"></div>
        </div>
    );
}

export default Receipt;