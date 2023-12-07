import Home from './pages/Home'
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import NoMatch from './pages/NoMatch';
import ReactPost from './pages/posts/ReactPost'
import TailwindPost from './pages/posts/TailwindPost'
import LuxunPost from './pages/posts/LuxunPost'
import Header from './layout/Header';
import NavigateBar from './layout/NavigateBar';

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="flex font-[chFont] text-wLight relative selection:bg-brand selection:text-bDark">
            <NavigateBar />
            <main className="bg-bLight flex-1">
                <Header />
                <Routes>
                    <Route path='/Personal_page'>
                        <Route index element={<Home />} />
                        <Route path='resume' element={<Resume />} />
                        <Route path='gallery' element={<Gallery />} />
                        <Route path='post'>
                            <Route index element={<Navigate to='/nomatch' replace />} />
                            <Route path='react' element={<ReactPost />} />
                            <Route path='tailwind' element={<TailwindPost />} />
                            <Route path='luxun' element={<LuxunPost />} />
                            <Route path='*' element={<Navigate to='/nomatch' replace />} />
                        </Route>
                        <Route path='nomatch' element={<NoMatch />} />
                        <Route path='*' element={<Navigate to='nomatch' replace />} />
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;