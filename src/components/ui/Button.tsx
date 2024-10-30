import { ReactNode } from 'react';
interface ButtonProps {
    label?: string;
    icon?: ReactNode;
    iconPos?: 'left' | 'right';
    className?: string;
}

const Button = ({ label, icon, iconPos, className }: ButtonProps) => {
    const IconComponent = icon ? <span>{icon}</span> : null;

    return (
        <button type='button' className={className}>
            {iconPos === 'left' && IconComponent}
            <span className='w-full'>{label}</span>
            {iconPos === 'right' && IconComponent}
        </button>
    );
};

export default Button;