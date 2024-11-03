import { Panel } from '@/components/shared/Panel';
import { PanelProducts } from '@/components/shared/PanelProducts';

export default function Home() {
    return (
        <main className='flex-grow py-20'>
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
    );
}