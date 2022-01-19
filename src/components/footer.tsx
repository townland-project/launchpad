import { Social } from "../database/footer"

export const Footer = () => {
    return (
        <footer className="flex flex-nowrap items-center px-[10vw] py-[30px] absolute bottom-0 left-0 right-0">
            <a
                className="mx-5 text-ms text-gray-600 hover:text-amber-600 flex items-center justify-center"
                href="https://townland.xyz">
                Home
            </a>

            <a
                className="mx-5 text-ms text-gray-600 hover:text-amber-600 flex items-center justify-center"
                href="https://townland.xyz/market">
                Market Place
            </a>

            <a
                className="mx-5 text-ms text-gray-600 hover:text-amber-600 flex items-center justify-center"
                href="https://townland.xyz/event">
                Events
            </a>

            <a
                className="mx-5 text-ms text-gray-600 hover:text-amber-600 flex items-center justify-center"
                href="https://townland.xyz/blog">
                Blog
            </a>

            <div className="flex-1"></div>
            {
                Social.map((item, index) =>
                    <a
                        key={index}
                        className="mr-6 rounded-full w-[32px] h-[32px] bg-slate-800 flex items-center justify-center"
                        href={item.link}>
                        <img className="w-[16px] h-[16px]" src={item.icon} alt={item.title} />
                    </a>
                )
            }
            <div className="flex-1"></div>

            <span className="ml-3 text-ms text-slate-600">&copy; 2022 Townland</span>
        </footer>
    )
}