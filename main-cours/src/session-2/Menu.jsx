function Menu() {
    return(
        <>
            <div className="z-20 bg-indigo-800 w-[25%] h-full">
                <div className="my-6 flex flex-col justify-between items-center">
                    <a className="w-[90%] flex flex-row justify-between items-center" href="#">
                        <div className="flex flex-row items-center">
                            <i className="mr-3 text-xs text-green-500 fa-solid fa-circle"></i>
                            <div>
                                <h3 className="text-white font-semibold">Gabin Dubais</h3>
                                <p className="text-slate-400 font-semibold">This is Gabib Dubais content</p>
                            </div>
                        </div>
                        <i className="text-white text-xl ml-1 fa-solid fa-angle-down"></i>
                    </a>
                </div>
                <div className="text-slate-300 flex flex-col justify-evenly">
                    <div className="font-semibold py-4 px-8 flex flex-col">
                        <h2 className="mb-5 text-slate-200">MAIN</h2>
                        <div className="flex flex-col justify-between">
                            <div className="mb-3">
                                <i className="mr-2 text-slate-500 fa-light fa-table-tree"></i>
                                <span>Dashboard</span>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-light fa-cube"></i>
                                    <span>Layout</span>
                                </div>
                                <i className="text-slate-300 fa-solid fa-angle-down"></i>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-light fa-circles-overlap"></i>
                                    <span>Forms</span>
                                </div>
                                <i className="text-slate-300 fa-solid fa-angle-down"></i>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-light fa-table-layout"></i>
                                    <span>Tables</span>
                                </div>
                                <i className="text-slate-300 fa-solid fa-angle-down"></i>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-light fa-table-columns"></i>
                                    <span>Pages</span>
                                </div>
                                <i className="text-slate-300 fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold py-4 px-8 flex flex-col">
                        <h2 className="mb-5 text-slate-200">APPS</h2>
                        <div className="flex flex-col justify-between">
                            <div className="mb-3">
                                <i className="mr-2 text-slate-500 fa-solid fa-dashboard"></i>
                                <span>Mail</span>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-solid fa-dashboard"></i>
                                    <span>Calendar</span>
                                </div>
                            </div>
                            <div className="mb-3 flex flex-row justify-between">
                                <div>
                                    <i className="mr-2 text-slate-500 fa-solid fa-dashboard"></i>
                                    <span>Invoices</span>
                                </div>
                                <i className="text-slate-300 fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu