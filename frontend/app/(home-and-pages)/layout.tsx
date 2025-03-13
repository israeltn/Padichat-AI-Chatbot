import NavBar from "@/components/navbar/NavBar";

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}
export default HomeLayout