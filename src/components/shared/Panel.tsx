import React from 'react';
import { Container } from './Container';
import Link from 'next/link';

type PanelProps = {
    title: string,
    nameLink?: string,
    children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ title, nameLink, children }) => {
    return (
        <Container>
            <div className='mb-[120px]'>
                <div className='flex justify-between items-end mb-10'>
                    <span className='text-xl text-coal font-bold'>{title}</span>
                    <Link className='text-s text-gray-hardest' href='/'>{nameLink}</Link>
                </div>
                {children}
            </div>
        </Container>
    );
};