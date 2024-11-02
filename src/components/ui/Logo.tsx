import Image from "next/image";
import logoBottomText from '../../app/images/logo/logo-bottom-text.svg';
import logoRightText from '../../app/images/logo/only-logo.svg';
import logoRoundText from '../../app/images/logo/logo-round-text.svg';
import Link from "next/link";

type LogoVariants = 'logo-bottom-text' | 'logo-round-text' | 'logo-right-text';

type LogoProps = {
    variant: LogoVariants,
    width: number,
    height: number
};

const Logo: React.FC<LogoProps> = ({ variant, width, height }) => {
    let src;
    let alt = 'Северяночка';

    switch (variant) {
        case 'logo-bottom-text':
            src = logoBottomText;
            break;
        case 'logo-round-text':
            src = logoRoundText;
            break;
        case 'logo-right-text':
            src = logoRightText;
            break;
        default:
            src = logoRightText;
    };

    return (
        <Link href='/' className='inline-flex items-center gap-[11px]'>
            <Image src={src} alt={alt} width={width} height={height} className='' />
            {variant === 'logo-right-text' && <span className="text-coal text-s font-bold uppercase">Северяночка</span>}
        </Link>
    );
};

export default Logo;