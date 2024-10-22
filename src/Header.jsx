import React from 'react';

const Header = () => {
    return(
        <>
            <nav className='flex justify-between items-center h-[50px] z-10 fixed w-full top-0 shadow-sm bg-white'>
                <div className="logo text-3xl font-bold ml-[100px]">Cammers</div>
                <div className="option mr-[100px]">
                    <ul className='flex gap-10'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href=""></a>Cart</li>
                        <li><a href=""></a>Login</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header