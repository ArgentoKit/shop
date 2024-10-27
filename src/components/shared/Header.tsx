import { clsx } from 'clsx/lite';
import React from 'react';
import { Container } from './Container';
import Button from '../ui/Button';
import MenuIcon from '../icons/MenuIcon'
import Logo from '../ui/Logo';

// interface Props {
//     className?: string;
// }

export const Header = ({  }) => {
    return (
        <header>
            <Container>
                <div className='py-4'>
                    <Logo variant='logo-right-text' />
                </div>
            </Container>
        </header>
    );
};