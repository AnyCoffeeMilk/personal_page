import React from 'react'

export default function TagText({ children }) {
    return (
        <span className="bg-gDark text-sm sm:text-base rounded-full px-2 py-0.5">
            {children}
        </span>
    )
}
