import { clsx } from 'clsx/lite';
import React from 'react';
import { Container } from './Container';
import Button from '../ui/Button';
import MenuIcon from '../icons/Menu'

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header>
            <Button label='Label' icon={<MenuIcon />} variant={'filled'} color={'orange'} disabled={false}></Button>
            <Button label='Label' variant={'filled'} color={'salad'} disabled={false}></Button>
            <Button label='Label' variant={'filled'} color={'gray'} disabled={false}></Button>
            <Button label='Label' variant={'filled'} color={'red'} disabled={false}></Button>
        </header>
    );
};