import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Body = () => {
    return (
        <div className='flex max-w-[100%]'>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Body;