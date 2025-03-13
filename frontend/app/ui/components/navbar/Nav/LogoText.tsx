import Link from "next/link"
import Image from "next/image"
const LogoText = () => {
    return (
        <Link className="flex items-end" href={"/"}>
            <Image src={"/logowithtext.svg"} className="w-44" height={25} width={25} alt="PadiChat Logo" />
        </Link>
    )
}

export default LogoText