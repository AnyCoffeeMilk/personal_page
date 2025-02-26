import { useState } from "react"
import { gallery_img } from "../resource/ImgHandler"

function Photo({ src, onClick }) {
    return (
        <div className="bg-gDark rounded flex-1 h-[20vh] sm:h-[25vh] overflow-hidden" onClick={() => onClick(src)}>
            <img className="h-full w-full object-cover" src={src} alt="macau view" />
        </div>
    )
}

function Zoomin({ active, src, onClick }) {
    return (
        <div className="sticky top-[80px] w-full" style={active ? null : { display: 'none' }}>
            <div className="sm:w-[calc(100%+24px*2)] z-0 h-screen absolute top-[-80px] sm:left-[-24px] flex justify-center items-center">
                <div className="z-10 md:h-[70%] rounded overflow-hidden">
                    <img className="h-full object-contain" src={src} alt="macau view" />
                </div>
                <div className="absolute bg-bDark bg-opacity-70 h-full w-full" onClick={onClick} />
            </div>
        </div>
    )
}

export default function Gallery() {
    const [zoomImg, setZoomImg] = useState(null)

    const mapGalleryImg = gallery_img.map((src, i) => (
        <Photo key={i} src={src} onClick={(img) => setZoomImg(img)} />
    ))
    
    return (
        <section className="px-3 lg:px-6">
            <Zoomin active={zoomImg !== null} src={zoomImg} onClick={() => setZoomImg(null)} />
            <div className="lg:px-[10%] pb-14 sm:pb-[10%] mx-auto max-w-[1300px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {mapGalleryImg}
            </div>
        </section>
    )
}