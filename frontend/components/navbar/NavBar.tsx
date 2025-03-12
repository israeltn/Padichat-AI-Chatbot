import Link from "next/link";
import Image from "next/image";
import NavItemList from "./NavItems";

const NavBar = () => {
  
    return (
        <nav className="app-container h-[90px]  py-8 justify-between ">
            <div className="flex justify-between gap-[66px] items-center ">
                <div className="md:flex-1/12">

                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                </div>
                    <NavItemList/>


            </div>

        </nav>
    );
}

export default NavBar