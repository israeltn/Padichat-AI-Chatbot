import NavBar from "@/app/ui/components/navbar/NavBar";

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <header className="w-full">
            <NavBar />
            {children}
        </header>
    )
}
export default HomeLayout