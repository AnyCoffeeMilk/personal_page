import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import LinkBtn from "./NavigateBar/LinkBtn";

function Icon() {
    const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return (
        <div onClick={handleClick} className="font-extrabold text-center py-2 px-4 md:px-2 md:py-7 cursor-pointer">
            <span className="text-brand">&lt;</span>IKL<span className="text-brand">/&gt;</span>
        </div>
    )
}

const sections = ['关于', '家乡', '专栏', '联络']

function NavigateBar({ sectionPos, onClick }) {
    const [currentSection, setCurrentSection] = useState(0)
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (sectionPos.length === 5) {
            window.addEventListener('scroll', () => {
                let count = 0
                for (let i = 0; i < 4; i++) {
                    if ((sectionPos[i] + sectionPos[i + 1]) / 2 <= window.scrollY) {
                        count++
                    }
                }
                if (count !== currentSection) {
                    setCurrentSection(count)
                }
            }, { passive: true })
        }
    }, [sectionPos, currentSection])

    const mapLinks = pathname !== '/' ? (
        <LinkBtn
            text="返回"
            active={true}
            onClick={() => navigate(pathname === '/nomatch' ? '/' : -1)}
        />
    ) : sections.map((text, i) => (
        <LinkBtn
            key={i}
            text={text}
            active={currentSection === i + 1}
            onClick={() => onClick(i + 1)}
        />
    ))

    return (
        <nav className="fixed z-10 w-full bottom-0 md:w-auto md:sticky md:top-0 md:h-screen">
            <div className="bg-bDark flex md:h-full md:block text-lg select-none">
                <Icon />
                {mapLinks}
            </div>
        </nav>
    )
}

export default NavigateBar