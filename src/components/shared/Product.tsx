import Image, { StaticImageData } from 'next/image';
import Button from '../ui/Button';

interface ProductProps {
    productImg: StaticImageData;
}

export const Product: React.FC<ProductProps> = ({ productImg }) => {
    return (
        <div className='max-w-[272px] bg-surface rounded shadow-blackXS'>
            <div>
                <Image src={productImg} width={272} height={160} alt='Блинчики с мясом' />
            </div>
            <div className='p-2'>
                <div className='flex justify-between items-end'>
                    <span className='text-m font-bold'>44,50 $</span>
                    <span className='text-s'>50,50 $</span>
                </div>
                <div className='flex justify-between text-xs text-gray-light mb-2'>
                    <span>С картой</span>
                    <span>Обычная</span>
                </div>
                <div className='text-s text-coal mb-2'>
                    Млинці 370г Своя лінія Французькі з куркою
                </div>
                <Button label='В корзину' className='btn btn-salad-outline w-full' />
            </div>
        </div>
    );
};