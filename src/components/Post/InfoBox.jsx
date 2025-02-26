import React from 'react'

export default function InfoBox({ img, items }) {
    const itemsMap = items.map((item, i) => (
        <span className="flex justify-between" key={i}>
            {item[0]}<span className="text-end max-w-[70%]">{item[1]}</span>
        </span>
    ))
    return (
        <div className='mx-auto w-[35vh]'>
            <div className="bg-gDark rounded py-4 w-[35vh] h-[35vh] overflow-hidden">
                <img className="h-full object-cover" src={img} alt="info" />
            </div>
            <div className="pt-4 text-sm sm:text-base">
                {itemsMap}
            </div>
        </div>
    )
}
