import About from "./components/About";
import Contact from "./components/Contact";
import Hometown from "./components/Hometown";
import Posts from "./components/Posts";
import Welcome from "./components/Welcome";

function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Hometown />
      <Posts />
      <Contact />
    </>
  )
}

export default Home