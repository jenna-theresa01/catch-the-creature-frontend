import Image from "next/image";

export default function Logo() {

    return(
        <div>
            <a className='flex' href='/'> 
                <Image src='/img/logo.png' alt="Logo" height={64} width={64} />
            </a>
        </div>
    )
}