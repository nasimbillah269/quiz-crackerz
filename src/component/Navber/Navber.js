import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-around items-center p-5 bg-slate-500'>
            <div>
                <h3 className='text-2xl text-white font-bold'>Coding Quiz</h3>
            </div>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 lg:hidden ">
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>
            <div className={`lg:flex sm:block font-bold text-white bg-slate-500  absolute lg:static duration-500 ${open ? 'top-6' : 'top-[-120px]'} `}>

                <Link className='block mr-8' to='/home'>Home</Link>
                <Link className='block mr-8' to='/topics'>Topics</Link>
                <Link className='block mr-8' to='/statistics'>Statistics</Link>
                <Link className='block mr-8' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Navber;