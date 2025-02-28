import Home from './pages/Home'
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import NoMatch from './pages/NoMatch';
import ReactPost from './pages/posts/ReactPost'
import TailwindPost from './pages/posts/TailwindPost'
import LuxunPost from './pages/posts/LuxunPost'
import Header from './components/General/Header';
import NavigateBar from './components/General/NavigateBar';

import { useRef, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

export default function App() {
    const ref_about = useRef()
    const ref_hometown = useRef()
    const ref_posts = useRef()
    const ref_contact = useRef()
    const { pathname } = useLocation();
    const [sectionPos, setSectionPos] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleNavClick = (id) => {
        if (id === 1) ref_about.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 2) ref_hometown.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 3) ref_posts.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 4) ref_contact.current?.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        setSectionPos([
            0,
            ref_about.current.getBoundingClientRect().y,
            ref_hometown.current.getBoundingClientRect().y,
            ref_posts.current.getBoundingClientRect().y,
            ref_contact.current.getBoundingClientRect().y,
        ])
    }, [])

    return (
        <div className="md:flex font-[chFont] text-wLight relative selection:bg-brand selection:text-bDark">
            <NavigateBar sectionPos={sectionPos} onClick={handleNavClick} />
            <main className="bg-bLight flex-1">
                <Header />
                <Routes path='/personal_page'>
                    <Route index element={
                        <Home 
                            ref_about={ref_about}
                            ref_hometown={ref_hometown}
                            ref_posts={ref_posts}
                            ref_contact={ref_contact} />
                    } />
                    <Route path='resume' element={<Resume />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='post/react' element={<ReactPost />} />
                    <Route path='post/tailwind' element={<TailwindPost />} />
                    <Route path='post/luxun' element={<LuxunPost />} />
                    <Route path='nomatch' element={<NoMatch />} />
                    <Route path='*' element={<Navigate to='/nomatch' replace />} />
                </Routes>
            </main>
        </div>
    );
}