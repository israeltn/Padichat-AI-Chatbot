import Image from "next/image";
const NavBar = () => {

    return (
        <nav className="flex justify-between ">
            <Image src={"/logo.svg"} className="w-60" height={25} width={25} alt="PadiChat Logo" />
        </nav>
    );
}

export default NavBar