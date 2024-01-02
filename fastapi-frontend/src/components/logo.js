import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    return(
        <div>
            <Link className='flex' href='/'> 
                <Image src='/img/logo.png' alt="Logo" height={64} width={64} className="rounded-full" />
            </Link>
        </div>
    )
}