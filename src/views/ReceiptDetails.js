import React from "react";
import MasterPage from "./MasterPage";
import Separator from "../components/Separator/Seperator";

export default function ReceiptDetails() {
    return (
        <MasterPage>

            <h2 className={'text-3xl p-2 m-3 font-bold text-gray-700'}>
                Receipt
            </h2>

            <div className="bg-white rounded shadow p-8">

                <div className="flex">

                    <div className={'w-72 h-80 bg-purple-500 mr-6 rounded-lg shadow'}>
                        <img src="" alt=""/>
                    </div>

                    <div>
                        <p className={'text-2xl text-purple-500 font-bold mb-4 border-b-2 border-purple-500 pb-2'}>Ehtisham UL Hassan</p>

                        <p className={'font-bold text-gray-700'}>Reg#</p>
                        <p className={'text-sm text-gray-600 mb-6'}>FA17-BCS-063</p>

                        <p className={'font-bold text-gray-700'}>Uploaded at</p>
                        <p className={'text-sm text-gray-600 mb-6'}>10-09-20201 at 10:09am</p>

                        <p className={'font-bold text-gray-700'}>Status</p>
                        <p className={'text-sm text-gray-600 mb-6'}>Pending</p>

                        <button
                            className={'text-purple-500 font-bold border-2 border-purple-500 py-2 px-6 rounded w-full hover:bg-purple-500 hover:text-white cursor-pointer'}>
                            Mark as Accepted
                        </button>

                    </div>

                </div>

            </div>

            <Separator title={'Extracted text'}/>

            <div className={'bg-white rounded-lg shadow p-6 mb-2'}>

                <p className={'text-sm text-gray-500'}>
                    Transaction number <br/>
                    12389473-2783943-0 <br/>
                    <br/>
                    Amount paid <br/>
                    1000 <br/>
                    <br/>
                    Date <br/>
                    10-09-2021 <br/>
                </p>

            </div>

            <Separator title={'Comments'}/>

            <div className={'mb-3 relative'}>
                <input type="text" placeholder={'type something'} className={'p-2 rounded-lg shadow  block w-full'}/>
                <input type="submit" value={'send'} className={'p-2 px-4 bg-purple-500 rounded-lg text-white absolute top-0 right-0'}/>
            </div>

        </MasterPage>
    )
}