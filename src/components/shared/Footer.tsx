import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { Container } from './Container';
import Logo from '../ui/Logo';
import Image from 'next/image';
import InstagramIcon from '/public/images/social/instagram.svg';
import YoutubeIcon from '/public/images/social/youtube.svg';
import FacebookIcon from '/public/images/social/facebook.svg';
import TelegramIcon from '/public/images/social/telegram.svg';

type Props = {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className={clsx('bg-beige py-6 bg-footer-pattern bg-[length:126px]', className)}>
            <Container className='flex justify-between'>
                <nav className='flex gap-10'>
                    <Logo variant='logo-bottom-text' width={64} height={44} />
                    <ul className='flex items-center gap-10 text-xs'>
                        <li>
                            <Link href='/'>О компании</Link>
                        </li>
                        <li>
                            <Link href='/'>Контакты</Link>
                        </li>
                        <li>
                            <Link href='/'>Вакансии</Link>
                        </li>
                        <li>
                            <Link href='/'>Статьи</Link>
                        </li>
                        <li>
                            <Link href='/'>Политика обработки персональных данных</Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex items-center gap-10'>
                    <ul className='flex gap-4'>
                        <li>
                            <a href="/" target='_blank' aria-label='Instagram'>
                                <Image src={InstagramIcon} alt={'Instagram'} />
                            </a>
                        </li>
                        <li>
                            <a href="/" target='_blank' aria-label='YouTube'>
                                <Image src={YoutubeIcon} alt={'Youtube'} />
                            </a>
                        </li>
                        <li>
                            <a href="/" target='_blank' aria-label='Facebook'>
                                <Image src={FacebookIcon} alt={'Facebook'} />
                            </a>
                        </li>
                        <li>
                            <a href="/" target='_blank' aria-label='Telegram'>
                                <Image src={TelegramIcon} alt={'Telegram'} />
                            </a>
                        </li>
                    </ul>
                    <div>
                        <span className='phone relative pl-8 before:block'>
                            097 777 33 33
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};