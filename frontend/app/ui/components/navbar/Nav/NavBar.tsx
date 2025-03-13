
import NavLinks from "./NavLinks";
import LogoText from "./LogoText";
import { PrimaryButton } from "@/app/ui/builders/Buttons";

const NavBar = () => {
    return (
        <nav className="flex backdrop-blur-2xl lg:px-30 w-full items-center justify-between fixed py-4">
            <LogoText />
            <NavLinks />
            <div>
                <PrimaryButton href="/login" >Get Started Now</PrimaryButton>
            </div>
        </nav>
    );
}
export default NavBar