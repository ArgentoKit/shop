import { Product } from './Product';
import Product1 from '../../app/images/products/1.png';

export const PanelProducts = () => {
    return (
        <div className='flex justify-between'>
            <Product productImg={Product1} />
            <Product productImg={Product1} />
            <Product productImg={Product1} />
            <Product productImg={Product1} />
        </div>
    );
};