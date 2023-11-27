import React from 'react';

function ArianeThread({ step }) {
    return (
        <div className="flex items-center justify-center py-10 space-x-2">
            {step >= 2 && (
            <svg className={`transition-opacity duration-200 mr-[-83px]`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#121517"/>
            </svg>
            )}
            <svg className={`transition-all duration-300 ${step >= 2 ? 'moveRight' : ''}`} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="#63579E"/>
                <circle cx="36" cy="36" r="34" transform="rotate(-180 36 36)" stroke="#121517" stroke-width="4"/>
            </svg> 
            <div className='bg-dark-color h-1 w-80'></div>
            <svg className={`transition-opacity duration-200 ${step >= 2 ? 'fadeOut' : 'fadeIn'}`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#121517"/>
            </svg>
        </div>
    );
}

export default ArianeThread;
