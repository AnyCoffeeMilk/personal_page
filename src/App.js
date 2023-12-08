import Home from './pages/Home'
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import NoMatch from './pages/NoMatch';
import ReactPost from './pages/posts/ReactPost'
import TailwindPost from './pages/posts/TailwindPost'
import LuxunPost from './pages/posts/LuxunPost'
import Header from './layout/Header';
import NavigateBar from './layout/NavigateBar';

import { useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    const ref_about = useRef()
    const ref_hometown = useRef()
    const ref_posts = useRef()
    const ref_contact = useRef()

    const handleNavClick = (id) => {
        if (id === 1) ref_about.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 2) ref_hometown.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 3) ref_posts.current?.scrollIntoView({behavior: 'smooth'})
        if (id === 4) ref_contact.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="flex font-[chFont] text-wLight relative selection:bg-brand selection:text-bDark">
            <NavigateBar onClick={handleNavClick} />
            <main className="bg-bLight flex-1">
                <Header />
                <Routes>
                    <Route path='/personal_page'>
                        <Route index element={
                            <Home 
                                ref_about={ref_about}
                                ref_hometown={ref_hometown}
                                ref_posts={ref_posts}
                                ref_contact={ref_contact} />
                        } />
                        <Route path='resume' element={<Resume />} />
                        <Route path='gallery' element={<Gallery />} />
                        <Route path='react' element={<ReactPost />} />
                        <Route path='tailwind' element={<TailwindPost />} />
                        <Route path='luxun' element={<LuxunPost />} />
                        <Route path='nomatch' element={<NoMatch />} />
                        <Route path='*' element={<Navigate to='nomatch' replace />} />
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;