import Link from "next/link"
const navItems = [
    {
        name: "Our Partners",
        link: "/#our-partners"
    },
    {
        name: "Features",
        link: "/#features"
    },
    {
        name: "About PadiChat",
        link: "/#about-padichat"
    },
    {
        name: "Contact Us",
        link: "/#contact-us"
    },
]
const NavLinks = () => {
    return (
        <div className="flex justify-end">
            <ul>
                {navItems.map((item) => (
                    <li key={item.name} className="inline-block mx-2">
                        <Link className="text-gray-500 hover:text-gray-950" href={item.link}>{item.name}</Link>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default NavLinks