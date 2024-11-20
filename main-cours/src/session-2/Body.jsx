function Body() {
    return(
        <>
            <div className="px-10 w-[75%] h-full flex flex-col justify-around">
                <div>
                    <h1 className="text-6xl text-slate-700 mb-1">Dashboard</h1>
                    <h4 className="text-2xl text-slate-500">This is how your company is doing it</h4>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="w-48 h-56 py-5 bg-white flex flex-col justify-around items-center rounded-lg shadow-slate-300 shadow-lg">
                        <div className="flex flex-col items-center">
                            <i className="mb-1 text-5xl text-sky-600 fa-light fa-eye"></i>
                            <h3 className="text-xl">Impressions</h3>
                        </div>
                        <h3 className="text-4xl text-sky-600 font-bold">9.5K</h3>
                        <div className="mt-4">
                            <i className="mr-1 text-lg text-green-700 fa-solid fa-circle-arrow-up"></i>
                            <span className="text-lg text-green-700 font-bold">0.03</span>
                        </div>
                    </div>
                    <div className="w-48 h-56 py-5 px-10 bg-white flex flex-col justify-around items-center rounded-lg shadow-slate-300 shadow-lg">
                        <div className="flex flex-col items-center">
                            <i className="mb-1 text-5xl text-blue-900 fa-light fa-computer-mouse"></i>
                            <h3 className="text-xl">Clicks</h3>
                        </div>
                        <h3 className="text-4xl text-blue-900 font-bold">4.3K</h3>
                        <div className="mt-4">
                            <i className="mr-1 text-lg text-green-700 fa-solid fa-circle-arrow-up"></i>
                            <span className="text-lg text-green-700 font-bold">2.78</span>
                        </div>
                    </div>
                    <div className="w-48 h-56 py-5 px-10 bg-white flex flex-col justify-around items-center rounded-lg shadow-slate-300 shadow-lg">
                        <div className="flex flex-col items-center">
                            <i className="mb-1 text-5xl text-green-600 fa-light fa-magnet"></i>
                            <h3 className="text-xl">Engagements</h3>
                        </div>
                        <h3 className="text-4xl text-green-600 font-bold">21K</h3>
                        <div className="mt-4">
                            <i className="mr-1 text-lg text-red-700 fa-solid fa-circle-arrow-down"></i>
                            <span className="text-lg text-red-700 font-bold">-2.01</span>
                        </div>
                    </div>
                    <div className="w-48 h-56 py-5 px-10 bg-white flex flex-col justify-around items-center rounded-lg shadow-slate-300 shadow-lg">
                        <div className="flex flex-col items-center">
                            <i className="mb-1 text-5xl text-purple-600 fa-light fa-camera"></i>
                            <h3 className="text-xl">Posts</h3>
                        </div>
                        <h3 className="text-4xl text-purple-600 font-bold">147</h3>
                        <div className="mt-4">
                            <i className="mr-1 text-lg text-green-700 fa-solid fa-circle-arrow-up"></i>
                            <span className="text-lg text-green-700 font-bold">1.02</span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white flex flex-row justify-between rounded-lg p-4">
                    <div>
                        <h1 className="text-3xl text-slate-700 mb-1">Total Audience by Region</h1>
                        <h4 className="text-md text-slate-600">Where your visitors are coming from</h4>
                    </div>
                    <button className="w-8 h-8">
                        <i className="text-2xl text-slate-700 fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Body