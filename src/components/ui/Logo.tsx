import Image from "next/image";
import logoBottomText from '../../app/images/logo/logo-bottom-text.svg';
import logoRightText from '../../app/images/logo/only-logo.svg';
import logoRoundText from '../../app/images/logo/logo-round-text.svg';

const Logo = ({ variant = 'only-logo' }) => {
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
        <div className='inline-flex items-center gap-[11px]'>
            <Image src={src} alt={alt} width={40} height={32} className='' />
            {variant === 'logo-right-text' && <span className="text-coal text-s font-bold uppercase">Северяночка</span>}
        </div>
    );
};

export default Logo;