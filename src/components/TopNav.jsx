import React from 'react'

const TopNav = () => {

    return (
        <div className='flex items-center pr-4 sm:px-14 border-b border-gray-600 pb-5'>
            <div className="hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <p className='text-white ml-3 hidden sm:block'>14th jan</p>
            <div className="border-r hidden sm:block border-white mx-8 h-10"></div>
            <div className="rounded-lg p-3 hidden sm:flex bg-[#1a1b20] cursor-pointer">
                <p> Press </p>
                <span className='px-2 mx-3 h-fit rounded-md bg-[#959ca6] text-black'>/</span>
                <p>to perform your first transaction</p>
            </div>
            <div className="ml-auto flex gap-x-9 mt-3 sm:mt-0 items-center">
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <div className="h-12 w-12 rounded-full cursor-pointer bg-green-900"></div>
            </div>
        </div>
    )
}

export default TopNav