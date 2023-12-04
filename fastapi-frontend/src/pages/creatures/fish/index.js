// import Link from "next/link";
import React from "react";
import NavBar from "../../../components/NavBar";

function FishPage() {

    return (
        <div className="flex">
            <div>
                <NavBar />
            </div>
        </div>
    )
}

export default FishPage;

// const Fish = ({fish}) => {
//     return (
//         <>
//         <Link
//             href='/creatures/fish'
//             state={{fish}}
//             className="card-link"
//         >
//             <div className="fish">
//                 <img src={fish.img_url} alt="fish" />
//                 <p></p>
//             </div>
//         </Link>
//         </>
//     );
// }

// export default Fish;
