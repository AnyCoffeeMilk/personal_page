import { useState } from "react"

const photo_src = [
    "/Personal_page/gallery/macau1.jpg",
    "/Personal_page/gallery/macau2.jpg",
    "/Personal_page/gallery/macau3.jpg",
    "/Personal_page/gallery/macau4.jpg",
    "/Personal_page/gallery/macau5.jpg",
    "/Personal_page/gallery/macau6.jpg",
    "/Personal_page/gallery/macau7.jpg",
    "/Personal_page/gallery/macau8.jpg",
    "/Personal_page/gallery/macau9.jpg",
    "/Personal_page/gallery/macau10.jpg",
    "/Personal_page/gallery/macau11.jpg",
    "/Personal_page/gallery/macau12.jpg",
    "/Personal_page/gallery/macau13.jpg",
    "/Personal_page/gallery/macau1.jpg",
    "/Personal_page/gallery/macau2.jpg",
    "/Personal_page/gallery/macau3.jpg",
    "/Personal_page/gallery/macau4.jpg",
    "/Personal_page/gallery/macau5.jpg",
    "/Personal_page/gallery/macau6.jpg",
    "/Personal_page/gallery/macau7.jpg",
    "/Personal_page/gallery/macau8.jpg",
    "/Personal_page/gallery/macau9.jpg",
    "/Personal_page/gallery/macau10.jpg",
    "/Personal_page/gallery/macau11.jpg",
    "/Personal_page/gallery/macau12.jpg",
    "/Personal_page/gallery/macau13.jpg",
    "/Personal_page/gallery/macau14.jpg",
    "/Personal_page/gallery/macau15.jpg",
]

function Photo({ src, onClick }) {
    return (
        <div className="bg-gDark rounded flex-1 h-[25vh] overflow-hidden" onClick={() => onClick(src)}>
			<img className="h-full object-cover" src={src} alt="macau view" />
		</div>
    )
}

function Zoomin({ active, src, onClick }) {
    return (
        <div className="sticky top-[80px] w-full" style={active ? null : {display: 'none'}}>
            <div className="w-[calc(100%+65px)] h-screen absolute top-[-80px] left-[-65px] flex justify-center items-center">
                <div className="bg-bDark bg-opacity-70 h-full w-full" onClick={onClick} />
                <div className="absolute h-[70%] rounded overflow-hidden">
                    <img className="h-full object-contain" src={src} alt="macau view" />
                </div>
            </div>
		</div>
    )
}

function Gallery() {
    const [zoomImg, setZoomImg] = useState(null)
    return (
        <section>
            <Zoomin active={zoomImg !== null} src={zoomImg} onClick={() => setZoomImg(null)} />
            <div className="md:px-[10%] px-8 pb-[10%] mx-auto max-w-[1300px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                { photo_src.map((src, i) => <Photo key={i} src={src} onClick={(img) => setZoomImg(img)} />) }
            </div>
        </section>
    )
}

export default Gallery