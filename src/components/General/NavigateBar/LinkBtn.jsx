import React from 'react'

export default function LinkBtn({ text, onClick, active }) {
    const handleStyle = () => {
        const base = 'flex-1 md:w-full cursor-pointer transition ease-in-out border-t md:border-t-0 md:border-r border-bDark text-wDark '
        if (active) return base + 'bg-bLight text-wLight border-brand'
        return base + 'hover:bg-bLight hover:text-wLight hover:border-brand'
    }

    return (
        <div className={handleStyle()} onClick={onClick}>
            <div className="text-center md:w-[1em] md:mx-auto py-2 md:py-8 md:leading-5">
                {text}
            </div>
        </div>
    )
}
