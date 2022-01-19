export interface ITokens {
    key: string
    name: string
    icon: string
}

export const Tokens: ITokens[] = [
    {
        key: 'eth',
        name: 'Ethereum',
        icon: 'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/cdbe4/eth-diamond-black.webp'
    },
    {
        key: 'matic',
        name: 'Matic',
        icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=018'
    }
]