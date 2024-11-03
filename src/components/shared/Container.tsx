import { clsx } from 'clsx/lite';
import React from "react";

interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children}) => {
    return <div className={clsx('mx-auto max-w-[1240px] px-4', className)}>{children}</div>
};