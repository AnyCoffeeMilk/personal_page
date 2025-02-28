import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandBtn({ relUrl, children }) {
    return (
        <Link to={relUrl} className='block text-base md:text-lg my-4 sm:my-8 transition ease-in-out text-brand'>
            <span className="block sm:inline border text-center border-brand cursor-pointer rounded py-3 px-6 hover:bg-brand hover:text-bLight">
                {children}
            </span>
        </Link>
    )
}
