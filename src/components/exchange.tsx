import { Box } from "./box"
import { Footer } from "./footer"
import { Header } from "./header"

export const Exchange = () => {
    return (
        <main data-simplebar className="bg-slate-100 w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
            <Header />

            <div className="flex md:flex-nowrap w-screen h-screen">
                <section className="md:flex flex-col items-center justify-center w-6/12 bg-amber-200 hidden">
                    <div className="pl-[4vw] pr-[8vw]">
                        <h1 className="text-amber-800 leading-snug text-3xl font-bold lg:text-6xl lg:font-normal">
                            <span className="text-blue-600">Pre buy</span> Townland token instantly before first release.
                        </h1>

                        <p className="text-gray-600 text-lg mt-10">
                            Very offical Townland token launchpad in real world to let you exchange your tokens to Townland tokens for before first release, instantly.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center w-full md:w-6/12 bg-amber-200 lg:bg-transparent">
                    <Box />
                </section>
            </div>

            <Footer />
        </main>
    )
}