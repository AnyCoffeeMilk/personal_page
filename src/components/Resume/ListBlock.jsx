import React from 'react'
import ArticleSubTitle from '../General/ArticleSubTitle'

export default function ListBlock({ title, children }) {
    const itemsMap = children.map((item, i) => (
        <li key={i} className="flex items-center">
            <span className="pr-2 sm:pr-4">-</span>
            {item}
        </li>
    ))
    return (
        <section>
            <ArticleSubTitle>{title}</ArticleSubTitle>
            <ul className="space-y-2 sm:space-y-4 text-lg">
                {itemsMap}
            </ul>
        </section>

    )
}
