// import Link from "next/link";
import React from "react";
import NavBar from "../../../components/NavBar";
import {Permanent_Marker} from 'next/font/google'
import Title from "@/components/title";

const font = Permanent_Marker({subsets: ['latin'], weight:'400'})

function FishPage() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <NavBar />
            </div>
            <div className={`mt-8 ${font.className}`}>
                <h2>Fish</h2>
            </div>

        </div>
    )
}

export default FishPage;


