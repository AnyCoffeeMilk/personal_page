import { useState, useEffect } from "react"

function addNothing() {
    let newDiv = document.createElement("div")
    newDiv.classList.add('nothing')
    document.getElementById("nothings").append(newDiv)
}

function removeNothing() {
    const container = document.getElementById("nothings")
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function TextBlock({ text, display, scrollPosition }) {
    if (display > scrollPosition) return <></>
    return (
        <div className="h-[150vh] font-[chFont] flex justify-center items-center">
            {text}
        </div>
    )
}

function Placeholder({ scrollPosition }) {
    return scrollPosition > 4000 ? <div className="h-screen" /> : null
}

function Nothing() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isScrollDown, setIsScrollDown] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY
            const scrollPercent = position / document.documentElement.scrollHeight
            if (position <= 1400) {
                setIsScrollDown(true)
            }
            else if (position > 6000 && scrollPercent > 0.8) {
                addNothing()
            } 
            else if (position > 6000 && scrollPercent < 0.7) {
                removeNothing()
                setIsScrollDown(false)
            }
            setScrollPosition(position)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <TextBlock scrollPosition={scrollPosition} 
                text={isScrollDown ? '下面没东西' : '做出这么个没用的功能'}
                display={1000} />
            <TextBlock scrollPosition={scrollPosition} 
                text={isScrollDown ? '真的没有' : '不过我也是真的闲'}
                display={2000} />
            <TextBlock scrollPosition={scrollPosition}
                text={isScrollDown ? '回头是岸啊' : '你是真的闲'}
                display={3000}  />
            <TextBlock scrollPosition={scrollPosition} 
                text={isScrollDown ? '别说我没提醒你' : '就说了没东西'}
                display={4000} />
            <Placeholder scrollPosition={scrollPosition} />
            <div id="nothings" />
        </div>
    )
}

export default Nothing