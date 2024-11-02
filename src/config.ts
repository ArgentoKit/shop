import type { Config } from "tailwindcss";

export const config: Config = {
    content: [],
    theme: {
        screens: {
            mobile: '336px',
            tablet: '736px',
            desktop: '1208px'
        },
        extend: {
            colors: {
                background: '#FBF8EC',
                surface: '#FFFFFF',
                orange: {
                    enabled: '#FF6633',
                    muted: '#FCD5BA'
                },
                salad: {
                    enabled: '#70C05B',
                    muted: '#E5FFDE'
                },
                red: {
                    enabled: '#D80000',
                    muted: '#FFC7C7'
                },
                black: '#291E0F',
                coal: '#414141',
                gray: {
                    lightest: '#F3F2F1',
                    light: '#BFBFBF',
                    hard: '#8F8F8F',
                    hardest: '#606060',
                },
                beige: '#F9F4E2',
                success: '#008C49',
                info: '#1CB9FC',
                warning: '#FCA21C',
                error: '#D80000'
            },
            container: {
                center: true,
                padding: '32px',
                screens: {
                    lg: '1240px'
                }
            },
            fontFamily: {
                sans: [`var(--font-rubik, 'Rubik')`, 'sans-serif']
            },
            transitionDuration: {
                DEFAULT: '300ms'
            },
            boxShadow: {
                blackXS: '1px 2px 4px 0px rgba(0,0,0,0.1)',
                blackS: '2px 4px 8px 0px rgba(0,0,0,0.1)',
                blackM: '4px 8px 16px 0px rgba(0,0,0,0.1)',
                blackL: '8px 16px 32px 0px rgba(0,0,0,0.1)',
                blackXL: '16px 32px 64px 0px rgba(0,0,0,0.1)',
                orangeXS: '1px 2px 4px 0px rgba(255,102,51,0.2)',
                orangeS: '2px 4px 8px 0px rgba(255,102,51,0.2)',
                orangeM: '4px 8px 16px 0px rgba(255,102,51,0.2)',
                orangeL: '8px 16px 32px 0px rgba(255,102,51,0.2)',
                orangeXL: '16px 32px 64px 0px rgba(255,102,51,0.2)',
                greenXS: '1px 2px 4px 0px rgba(255,102,51,0.2)',
                greenS: '2px 4px 8px 0px rgba(255,102,51,0.2)',
                greenM: '4px 8px 16px 0px rgba(255,102,51,0.2)',
                greenL: '8px 16px 32px 0px rgba(255,102,51,0.2)',
                greenXL: '16px 32px 64px 0px rgba(255,102,51,0.2)',
            },
            fontSize: {
                xs: ['12px', '18px'],
                s: ['16px', '24px'],
                m: ['18px', '27px'],
                l: ['24px', '36px'],
                xl: ['36px', '54px'],
                'header-xs': ['18px', '27px'],
                'header-s': ['24px', '36px'],
                'header-m': ['36px', '54px'],
                'header-l': ['48px', '72px'],
                'header-xl': ['64px', '96px'],
            },
            backgroundImage: {
                'footer-pattern': "url('/images/common/bg-1.svg')",
            }
        }
    }
};