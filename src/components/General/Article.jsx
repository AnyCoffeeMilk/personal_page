import React from 'react'

export default function Article({ children }) {
    return (
        <div className="px-3 sm:px-6 lg:px-[10%] mx-auto max-w-[1300px] space-y-8 text-lg">
            {children}
        </div>
    )
}
