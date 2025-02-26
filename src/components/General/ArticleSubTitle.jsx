import React from 'react'
import BrandText from './BrandText'

export default function ArticleSubTitle({ children }) {
    return (
        <h2 className="text-lg sm:text-2xl pb-2 sm:pb-4 flex items-center font-semibold">
            <BrandText>{children}</BrandText>
        </h2>
    )
}
