import React from 'react'
import TitleDivider from '../General/TitleDivider'

export default function TextYearItem({ year, children }) {
    return (
        <span className='flex flex-1 items-center text-base sm:text-lg gap-2 sm:gap-4'>
            {children}<TitleDivider />{year}年
        </span>
    )
}
