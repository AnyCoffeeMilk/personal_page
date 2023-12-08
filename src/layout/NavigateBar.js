import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";

function Icon() {
    const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return (
        <div onClick={handleClick} className="font-extrabold px-2 py-7 cursor-pointer">
            <span className="text-brand">&lt;</span>IKL<span className="text-brand">/&gt;</span>
        </div>
    )
}

function Link({ text, onClick, active }) {
    const handleStyle = () => {
        const base = 'w-full cursor-pointer transition ease-in-out border-r border-bDark text-wDark '
        if (active) return base + 'bg-bLight text-wLight border-brand'
        return base + 'hover:bg-bLight hover:text-wLight hover:border-brand'
    }

    return (
        <div className={handleStyle()} onClick={onClick}>
            <div className="w-[1em] mx-auto py-8 leading-5">
                {text}
            </div>
        </div>
    )
}

const sections = ['关于', '家乡', '专栏', '联络']

function NavigateBar({ onClick }) {
    const [currentSection, setCurrentSection] = useState(0)
    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        window.addEventListener('scroll', () => setCurrentSection(
            Math.floor((window.scrollY + window.innerHeight * 0.5) / window.innerHeight
        )), { passive: true })
    }, [])

    const handleLinkMap = () => {
        if (pathname !== '/') return (
            <Link text="返回" active={true} onClick={() => {
                if (pathname === '/nomatch') navigate('/')
                else navigate(-1)
            }}/>
        )
        return sections.map((text, i) => (
            <Link key={i} text={text} 
                active={currentSection === i + 1} 
                onClick={() => onClick(i+1)}
            />
        )
    )}

    return (
        <nav className="bg-bDark sticky top-0 text-lg h-screen select-none">
            <Icon />
            { handleLinkMap() }
        </nav>
    )
}

export default NavigateBar