export interface IFooterLink {
    path: string
    name: string
}

export interface IFooterColumn {
    name: string
    link: IFooterLink[]
}

export interface ISocial {
    title: string
    icon: string
    color: string
    link: string
}

export const Social: ISocial[] = [
    {
        title: 'Twitter',
        icon: '/assets/social/twitter.png',
        color: '#38bdf8',
        link: 'https://twitter.com/townlandproject'
    },
    {
        title: 'Github',
        icon: '/assets/social/github.png',
        color: '#1e293b',
        link: 'https://github.com/townland-project'
    }
]

export const FooterColumn: IFooterColumn[] = [
    {
        name: 'Pages',
        link: [
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
    },
    {
        name: 'Explore',
        link: [
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
    }
]