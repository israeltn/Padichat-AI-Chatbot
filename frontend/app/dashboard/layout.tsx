

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>Dashboard Layout</div>
      {children}</div>
  )
}

export default layout