import Logo from './Logo'

function HeaderMenu() {
    return(
        <>
            <div className="z-20 bg-purple-500 w-[25%] h-[12vh] flex flex-row justify-between items-center">
                <a href="#">
                    <Logo />
                </a>
                <a className='mr-6' href="#">
                    <i className="text-4xl text-white fa-light fa-bars"></i>
                </a>
            </div>
        </>
    )
}

export default HeaderMenu