import React from 'react'
import TagText from '../General/TagText'

export default function TagSection({ tags, children }) {
    const mapTags = tags.map((tag, i) => (
        <TagText key={i}>
            {tag}
        </TagText>
    ))
    return (
        <div>
            <h3 className="text-lg sm:text-2xl pb-5 flex gap-2 items-center">
                {children}
            </h3>
            <div className="flex gap-2 flex-wrap">
                {mapTags}
            </div>
        </div>
    )
}