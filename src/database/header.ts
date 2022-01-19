export interface IHeaderLink {
    path: string
    name: string
}

export const HeaderLinks: IHeaderLink[] = [
    // {
    //     path: '/exchange',
    //     name: 'Exchange'
    // },
    {
        path: '/market',
        name: 'Market Place'
    },
    {
        path: '/event',
        name: 'Events'
    },
    {
        path: '/blog',
        name: 'Blog'
    }
]

export const HeaderTopLinks: IHeaderLink[] = [
    {
        path: '/page/faq',
        name: 'FAQ'
    },
    {
        path: '/page/privacy',
        name: 'Privacy'
    },
    {
        path: '/page/support',
        name: 'Support'
    },
    {
        path: '/page/about',
        name: 'About'
    }
]