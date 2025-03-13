import Image from "next/image"
const Logo = () => {
    return (
        <div><Image width={100} height={100} alt="PadiChat" className="w-36 h-auto" src={"/logowithtext.svg"}></Image></div>
    )
}

export default Logo