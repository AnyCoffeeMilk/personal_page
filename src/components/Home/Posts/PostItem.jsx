import React from 'react'
import TagText from '../General/TagText'
import BrandBtn from '../General/BrandBtn'

export default function Post({ title, text, tags, img_src, page }) {
    const mapTags = tags.map((text, i) => (
        <TagText key={i}>
            {text}
        </TagText>
    ))
    return (
        <div className="md:flex gap-8 border-b border-gDark pb-4">
            <div className="bg-gDark rounded md:w-[16em] h-[30vh] sm:h-[25vh] md:h-[9em] overflow-hidden">
                <img className="w-full h-full object-cover" src={img_src} alt="loading..." />
            </div>
            <div className="flex-1">
                <h3 className="text-lg sm:text-2xl md:pt-0 pt-4">
                    {title}
                </h3>
                <div className="text-wDark sm:text-lg">
                    {text}
                </div>
                <div className="flex gap-2 flex-wrap my-2">
                    {mapTags}
                </div>
            </div>
            <BrandBtn relUrl={page}>
                进入专栏
            </BrandBtn>
        </div>
    )
}