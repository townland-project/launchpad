import { useState } from "react"
import { ITokens, Tokens } from "../database/tokens"

export const Box = () => {
    const [SelectedToken, SelectToken] = useState<ITokens>(Tokens[0])
    const [Selecting, SetSelecting] = useState<boolean>(false)

    return (
        <div
            className="flex flex-col bg-white rounded-xl shadow-lg min-w-[400px] w-[400px] p-[20px]">
            <h2 className="text-gray-700 text-xl font-bold mb-2">Exchange your tokens</h2>
            <p className="text-gray-500 mb-12">
                From your wallet to Townland world
            </p>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex flex-nowrap items-center">
                        <strong className="mb-4 text-gray-600 text-xl">Exchange from</strong>
                        <div className="flex-1"></div>
                        <span className="text-sm text-violet-500 cursor-pointer">MAX</span>
                    </div>
                    <div className="flex flex-nowrap items-start min-h-[52px]">
                        <div className="bg-slate-200 text-slate-800 text-sm rounded-2xl cursor-pointer relative min-w-fit mr-6 overflow-hidden">
                            <div
                                onClick={() => SetSelecting(!Selecting)}
                                className="flex flex-nowrap items-center px-[8px] py-[2px] my-2 mx-2 text-slate-600">
                                <img className="w-[18px] h-[18px] mr-2 object-contain" src={SelectedToken.icon} alt={SelectedToken.name} />
                                {SelectedToken.name}
                                <i className="material-icons ml-4">expand_more</i>
                            </div>
                            <div
                                data-simplebar
                                style={{
                                    'height': Selecting ? '' : '0px',
                                }}
                                className="flex flex-col min-h-fit max-h-[200px] overflow-x-hidden overflow-y-auto">
                                {
                                    Tokens.map((token, index) =>
                                        <div onClick={() => { SelectToken(token); SetSelecting(false); }} key={index} className="flex flex-nowrap items-center rounded-xl hover:bg-slate-100 mx-[10px] my-[5px] px-[10px] py-[10px] transition-all duration-300 text-slate-600">
                                            <img className="w-[16px] h-[16px] mr-2 object-contain" src={token.icon} alt={token.name} />
                                            {token.name}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-nowrap items-center relative top-[14px]">
                            <input className="w-full text-right outline-none" type="number" value={1} />
                            <sub className="text-slate-600 uppercase">{SelectedToken.key}</sub>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col mt-[30px] -mb-[10px] items-center justify-center">
                    <div className="h-[2px] w-full bg-gray-300 rounded-2xl"></div>
                    <button
                        className="w-[42px] h-[42px] cursor-default relative -top-[20px] border-4 border-solid border-white rounded-full bg-teal-400 flex items-center justify-center">
                        <i className="material-icons text-white">arrow_downward</i>
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-nowrap items-center">
                        <strong className="mb-4 text-gray-600 text-xl">To buy</strong>
                    </div>
                    <div className="flex flex-nowrap items-start min-h-[52px]">
                        <div className="bg-slate-200 text-slate-800 text-sm rounded-2xl min-w-fit mr-6">
                            <div
                                className="flex flex-nowrap items-center pl-[8px] pr-[12px] py-[4px] my-2 mx-2 text-slate-600">
                                <div className="w-[18px] h-[18px] mr-2 bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                                TOWL
                            </div>
                        </div>
                        <div className="flex flex-nowrap items-center relative top-[10px]">
                            <input disabled className="w-full bg-transparent text-right outline-none" type="number" value={1} />
                            <sub className="text-slate-600 uppercase">TOWL</sub>
                        </div>
                    </div>
                </div>
            </div>

            <button className="py-3 mt-8 rounded-2xl bg-red-400 text-white hover:scale-105 active:scale-100 transition-all duration-300">
                Buy Tokens
            </button>

            <span className="mt-6 text-gray-500 text-center text-sm">without gas fee</span>
        </div>
    )
}