import React from 'react'

export default function TitleText({ children }) {
    return (
        <h2 className="text-4xl sm:text-6xl pt-16 sm:pt-28 gap-6 pb-4 sm:pb-8 text-center flex items-center font-bold">
            {children}
        </h2>
    )
}
