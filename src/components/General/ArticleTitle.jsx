import React from 'react'
import TitleDivider from './TitleDivider'
import BrandText from './BrandText'

export default function ArticleTitle({ children }) {
    return (
        <h2 className="gap-6 text-2xl sm:text-4xl sm:pb-6 lg:pb-12 flex items-center font-bold text-center">
            <TitleDivider />
            <BrandText>{children}</BrandText>
            <TitleDivider />
        </h2>
    )
}
