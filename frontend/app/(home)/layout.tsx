import NavBar from "@/components/navbar/NavBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="antialiased max-w-[1440px] mx-auto"
    >
      <div className="backdrop-blur-md sticky top-0 z-50 max-h-[90px] h-[90px]">
        <NavBar />
      </div>
      {children}
    </div>
  );
}
