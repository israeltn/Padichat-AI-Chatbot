import Link from "next";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link href="/">
               {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
               Logo
            </Link>
            </li>
            <li>
                
            </li>
        </ul>
        </nav>
    );
}

export default NavBar