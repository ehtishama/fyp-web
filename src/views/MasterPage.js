import React from "react"
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";

export default function MasterPage(props) {
    return (
        <div className={"h-full mb-3"}>
            <div className={"h-full"}>
                <Navbar/>
                <div className={"flex h-full"}>
                    <Sidebar/>
                    <main className={"ml-72 h-full p-4 w-full"}>
                        { props.children }
                    </main>
                </div>
            </div>
        </div>
    );
}


