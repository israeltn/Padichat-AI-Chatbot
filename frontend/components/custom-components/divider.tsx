
const Divider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex items-center my-4">
            <div className="flex-grow border-t-1 border border-zinc-200"></div>
            <span className="px-3 text-zinc-500 ">{children}</span>
            <div className="flex-grow border-t-1 border border-zinc-200"></div>
        </div>
    )
}

export default Divider