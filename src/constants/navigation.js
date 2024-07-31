export const navigation = [
    {
        label: 'TV Shows',
        href: 'tv',
        icon: <i className='ri-folder-video-fill'></i>,
    },
    {
        label: 'Movies',
        href: 'movie',
        icon: <i className='ri-film-fill'></i>,
    },
];
export const mobileNavigation = [
    {
        label: 'Home',
        href: '/',
        icon: <i className='ri-home-3-fill'></i>,
    },
    ...navigation,
    {
        label: 'Search',
        href: '/search',
        icon: <i className='ri-search-line '></i>,
    },
];
