import type { Metadata } from "next";
import { lato } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PadiChat",
  description: "PadiChat is a chat application for everyone",
  authors: [{ name: "Osasere Ikponmwosa" }, { name: "Adenomor Omoyokan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased mx-auto text-defaults`}
      >
        {children}
      </body>
    </html>
  );
}
