import { HeaderLinks, HeaderTopLinks } from '../database/header'

export const Header = () => {
    return (
        <header className="px-8 lg:px-14 w-full flex flex-col absolute top-0">
            <div className="pt-6 hidden lg:flex flex-nowrap items-center justify-end">
                {
                    HeaderTopLinks.map((link, index) =>
                        <a
                            className="ml-10 text-xs text-slate-500 hover:text-slate-900 flex items-center justify-center"
                            key={index}
                            href={`https://townland.xyz${link.path}`}>
                            {link.name}
                        </a>
                    )
                }
            </div>

            <div className="flex flex-nowrap items-center pt-6">
                <a className="flex flex-nowrap items-center" href="https://townland.xyz">
                    <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                    <div className="flex flex-col ml-[10px]">
                        <strong className="text-slate-700 text-md md:text-xl">Townland</strong>
                        <span className="text-slate-500 text-xs md:text-sm">Your 2D RP world</span>
                    </div>
                </a>

                <div className="flex-1"></div>
                <div className='hidden md:flex flex-nowrap'>
                    {
                        HeaderLinks.slice(0, HeaderLinks.length).map((link, index) =>
                            <a
                                className="mr-1 lg:mr-2 h-10 px-6 rounded-md text-slate-500 hover:bg-slate-50/50 flex items-center justify-center"
                                key={index}
                                href={`https://townland.xyz${link.path}`}>
                                {link.name}
                            </a>
                        )
                    }

                    <div className="w-[1px] h-8 bg-slate-400 mr-8"></div>
                </div>

                <button className="h-8 px-4 md:h-10 md:px-6 rounded-md bg-amber-500 text-white drop-shadow-[0_6px_#d97706] flex items-center justify-center">
                    Login Account
                </button>
            </div>
        </header>
    )
}