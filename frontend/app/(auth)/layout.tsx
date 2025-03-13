const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div>Authentication Layout</div>
            {children}</div>
    )
}
export default layout