import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded text-l px-4 py-3 text-white',
    {
        variants: {
            variant: {
                filled: '',
                outlined: 'bg-white border',
                text: 'bg-transparent',
            },
            color: {
                orange: '',
                salad: '',
                gray: '',
                red: '',
            },
            disabled: {
                true: '',
                false: '',
            },
        },
        compoundVariants: [
            {
                variant: 'filled',
                color: 'orange',
                disabled: false,
                className: 'bg-orange-enabled',
            },
            {
                variant: 'filled',
                color: 'salad',
                disabled: false,
                className: 'bg-salad-enabled',
            },
            {
                variant: 'filled',
                color: 'gray',
                disabled: false,
                className: 'bg-gray-enabled text-gray-hardest',
            },
            {
                variant: 'filled',
                color: 'red',
                disabled: false,
                className: 'bg-red-enabled',
            },
        ]
    }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    label: string;
    icon?: ReactNode;
    iconPos?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ label, icon, iconPos = 'left', variant, color, disabled }) => {
    const classNames = buttonVariants({ variant, color, disabled });
    const IconComponent = icon ? <span>{icon}</span> : null;

    return (
        <button className={classNames} type='button' disabled={disabled ?? false}>
            {iconPos === 'left' && IconComponent}
            {label}
            {iconPos === 'right' && IconComponent}
        </button>
    );
};

export default Button;