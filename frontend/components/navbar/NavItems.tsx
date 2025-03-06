import { NavItemInterface } from "@/types/index.d";
import Link from 'next/link';
const NavItemList = () => {
    const navItems: NavItemInterface[] = [
        {
            title: 'Our Partners',
            path: '/partners'
        },
        {
            title: 'Features',
        path: '/features'},
        {
            title: 'About PadiChat',
        path: '/about'},
        {
            title: 'Contact Us',
            path: '/contact'
        }
    ]

    return (
        <div>
            {navItems.map(item => (
                <Link key={item.title} href={item.path}>
                {item.title}
                </Link>
            ))}
        </div>
    );
};

export default NavItemList;