import Link from "next/link";
import NavBar from "@/components/NavBar";
import {Permanent_Marker} from 'next/font/google'

const font = Permanent_Marker({subsets: ['latin'], weight:'400'})

// export default function FishPage() {
//     return(
//         <div>
//             <NavBar />
//                 <div className="flex justify-center">
//                     <div className={font.className}>
//                         <h2>Fish</h2>
//                         <Link href="" />
//                     </div>
//                 </div>
//         </div>
//     )
// }