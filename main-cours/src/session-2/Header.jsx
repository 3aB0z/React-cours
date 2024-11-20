function Header() {
    return(
      <>
        <div className='z-20 w-[75%] flex flex-row justify-between items-center my-5'>
            <div className="ml-8 w-[60%] flex items-center">
                <button className="h-12 bg-slate-100 rounded-e-sm rounded-3xl pl-4" type="button"><i className="text-2xl text-slate-700 fa-regular fa-magnifying-glass"></i></button>
                <input className="w-60 h-12 bg-slate-100 rounded-e-3xl pl-3 pr-4" type="search" placeholder="Search for..." />
            </div>
            <div className="w-[40%] flex flex-row justify-end">
                <a className="mx-6 flex flex-row items-center" href="#"><i className="text-2xl text-sky-700 fa-solid fa-bars"></i></a>
                <a className="mx-6 flex flex-row items-center" href="#"><i className="text-2xl text-sky-700 fa-regular fa-bell"></i></a>
                <a className="mx-6 flex flex-row items-center" href="#"><i className="text-2xl text-sky-700 fa-regular fa-envelope"></i></a>
                <a className="mx-6 flex flex-row items-center" href="#">
                    <i className="text-2xl text-sky-700 fa-solid fa-address-book"></i>
                    <i className="mt-1 ml-1 text-md text-sky-700 fa-solid fa-angle-down"></i>
                </a>
                <a className="mx-6" href="#"><i className="text-3xl text-sky-900 fa-solid fa-grid-round"></i></a>
            </div>
        </div>
      </>
    )
}

export default Header