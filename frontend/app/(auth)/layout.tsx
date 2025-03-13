const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="grid w-screen grid-cols-1 h-screen md:grid-cols-2">
            <div className="col-span-1">
                {children}
            </div>
            <div className="col-span-1 hidden md:block bg-[url(/happycouple.png)] bg-no-repeat bg-cover">
            </div>
        </div>
    )
}

export default layout