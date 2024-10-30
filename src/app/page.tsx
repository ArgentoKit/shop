import { Rubik } from 'next/font/google';
import { Header } from '@/components/shared/Header';
import { Panel } from '@/components/shared/Panel';
import { PanelProducts } from '@/components/shared/PanelProducts';

const rubik = Rubik({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export default function Home() {
    return (
        <div className={`${rubik.className} flex flex-col min-h-lvh`}>
            <Header />
            <main className='flex-grow py-20 bg-background'>
                <Panel title='Акции' nameLink='Все акции'>
                    <PanelProducts />
                </Panel>
                <Panel title='Новинки' nameLink='Все новинки'>
                    <PanelProducts />
                </Panel>
                <Panel title='Покупали раньше' nameLink='Все покупки'>
                    <PanelProducts />
                </Panel>
            </main>
        </div>
    );
}