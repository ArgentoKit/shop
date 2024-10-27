import { Rubik } from 'next/font/google';
import { Header } from "@/components/shared/Header";

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={rubik.className}>
        <Header></Header>
    </div>
  );
}