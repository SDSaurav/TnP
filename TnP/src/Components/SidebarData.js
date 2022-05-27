import React from 'react';
import Register from './Register';
import HrDetails from './HRDetails';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ioIcons from 'react-icons/io5';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Vacancy',
        path: '/Register',
        icon: <ioIcons.IoAddCircleSharp />,
        cName: 'nav-text'
    },
    {
        title: 'Hr Details',
        path: '/HrDetails',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'SignOut',
        path: '/login',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
];
