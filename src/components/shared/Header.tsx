import { clsx } from 'clsx/lite';
import React from 'react';
import { Container } from './Container';
import Button from '../ui/Button';
import MenuIcon from '../icons/MenuIcon'

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header>
            <Container>
                
            </Container>
        </header>
    );
};