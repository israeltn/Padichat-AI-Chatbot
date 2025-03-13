"use client";
import { NavItemInterface } from "@/types/index.d";
import NavMenu from "./NavMenu";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/ui/app-button";
import Link from "next/link";
import { useState } from "react";




const NavItemList = () => {
    const navItems: NavItemInterface[] = [
        {
            title: 'Our Partners',
            path: '#partners'
        },
        {
            title: 'Features',
            path: '#features'
        },
        {
            title: 'About PadiChat',
            path: '#about'
        },
        {
            title: 'Contact Us',
            path: '#contact'
        }
    ]
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-between md:flex-11/12 items-center ">
            <div className="hidden md:flex items-center gap-8">

                {navItems.map(item => (
                    <NavMenu key={item.title} {...item} />
                ))}
            </div>
            <div className="flex gap-3.5">

                <span className="hidden md:flex">

                    <SecondaryButton href="/login" >
                        Login
                    </SecondaryButton>
                </span>

                <PrimaryButton href="/signup">
                    Get Started Now
                </PrimaryButton>

                <Image src="/icons/menu.svg" className={`md:hidden ${isOpen ? 'hidden' : ''}`} alt="menu icon" onClick={() => setIsOpen(true)} width={22} height={16.667} />

                {isOpen && (
                    <div className={`md:hidden absolute top-[90px] right-0 max-w-[318px] w-[318px] backdrop-blur-[25px] bg-gray-300 h-lvh z-50 ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex justify-end p-4">
                            <Image src="/icons/close.svg" alt="close icon" width={20} height={20} onClick={() => setIsOpen(false)} />
                        </div>
                        <div className="flex flex-col items-center">

                            <div className="flex flex-col items-start px-5 gap-8">
                                <Link href="/">
                                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                                </Link>

                                {navItems.map(item => (
                                    <NavMenu key={item.title} {...item} />
                                ))}

                            </div>
                        </div>
                    </div>)}
            </div>



        </div>
    );
};

export default NavItemList;