export default {
    '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderRadius: '0.25rem',
        padding: '0.5rem',
        color: 'white'
    },
    '.btn-orange-enabled': {
        backgroundColor: 'var(--orange-enabled-color)'
    },
    '.btn-salad-enabled': {
        backgroundColor: 'var(--salad-enabled-color)'
    },
    '.btn-salad-outline': {
        color: 'var(--salad-enabled-color)',
        border: '1px solid var(--salad-enabled-color)',
        borderRadius: '4px',
        borderColor: 'var(--salad-enabled-color)',
    },
    '.btn-gray-enabled': {
        backgroundColor: 'var(--gray-lightest-color)',
        color: 'var(--gray-hardest-color)'
    },
    '.btn-red-enabled': {
        backgroundColor: 'var(--red-enabled-color)'
    },
    '.gradient-green': {
        background: 'linear-gradient(180deg, rgba(112,192,91,0) 0%, rgba(112,192,91,1) 100%)',
    },
    '.gradient-orange': {
        background: 'linear-gradient(180deg, rgba(255,102,51,0) 0%, rgba(255,102,51,1) 100%)',
    },
    '.phone::before': {
        content: '',
        position: 'absolute',
        width: '1.5rem',
        height: '1.5rem',
        backgroundImage: 'url("/images/common/phone.png")',
        backgroundSize: 'contain',
    },
};