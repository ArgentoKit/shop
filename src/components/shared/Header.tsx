import React from 'react';
import { Container } from './Container';
import Button from '../ui/Button';
import MenuIcon from '../icons/MenuIcon'
import Logo from '../ui/Logo';
import SearchBar from '../ui/SearchBar';
import Link from 'next/link';

type HeaderProps = {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className='bg-surface shadow-blackS'>
            <Container>
                <div className='flex gap-10 py-4'>
                    <Logo variant='logo-right-text' width={40} height={32} />
                    <div className='flex gap-4'>
                        <Link href={'/categories'}>
                            <Button className='btn btn-salad-enabled w-[140px]' label='Каталог' icon={<MenuIcon/>} iconPos='left'/>
                        </Link>
                        <SearchBar />
                    </div>
                </div>
            </Container>
        </header>
    );
};