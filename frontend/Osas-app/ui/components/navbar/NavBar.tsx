import NavLinks from "./NavLinks";
import LogoText from "./LogoText";
import { PrimaryButton, SecondaryButton } from "@/app/ui/builders/Buttons";
const NavBar = () => {
    return (
        <nav className="flex backdrop-blur-2xl lg:px-30 w-full items-center justify-between fixed py-4">
            <LogoText />
            <NavLinks />
            <div className="flex space-x-4">
                <SecondaryButton href="/login" >Login</SecondaryButton>
                <PrimaryButton href="/signup" >Get Started Now</PrimaryButton>
            </div>
        </nav>
    );
}
export default NavBar