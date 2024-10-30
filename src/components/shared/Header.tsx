import { clsx } from 'clsx/lite';
import React from 'react';
import { Container } from './Container';
import Button from '../ui/Button';
import MenuIcon from '../icons/MenuIcon'
import Logo from '../ui/Logo';
import SearchBar from '../ui/SearchBar';

// interface Props {
//     className?: string;
// }

export const Header = ({  }) => {
    return (
        <header>
            <Container>
                <div className='flex gap-10 py-4'>
                    <Logo variant='logo-right-text' />
                    <div className='flex gap-4'>
                        <Button className='btn btn-salad-enabled w-[140px]' label='Каталог' icon={<MenuIcon/>} iconPos='left'/>
                        <SearchBar />
                    </div>
                </div>
            </Container>
        </header>
    );
};