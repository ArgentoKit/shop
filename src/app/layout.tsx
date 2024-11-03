import { Rubik } from 'next/font/google';
import { Header } from "@/components/shared/Header";
import "./styles/globals.css";
import { Footer } from "@/components/shared/Footer";

const rubik = Rubik({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${rubik.className} flex flex-col min-h-screen bg-background text-coal`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
