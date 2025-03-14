const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid sm:text-sm md:text-md  w-screen grid-cols-1 h-screen lg:grid-cols-2">
            <div className="col-span-1 px-5">
                {children}
            </div>
            <div className="col-span-1 hidden md:block bg-[url(/happycouple.png)] bg-no-repeat bg-cover">
            </div>
        </div>
    )
}

export default layout