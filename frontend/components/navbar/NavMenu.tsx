import Link from "next/link";
import { NavItemInterface } from "@/types/index.d";

const NavMenu = (item: NavItemInterface) => {
    return (
        <div>
            <Link key={item.title} href={item.path}>
                {item.title}
            </Link>
        </div>
    );
};

export default NavMenu;