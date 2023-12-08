import About from "./components/About";
import Contact from "./components/Contact";
import Hometown from "./components/Hometown";
import Posts from "./components/Posts";
import Welcome from "./components/Welcome";

function Home({ ref_about, ref_hometown, ref_posts, ref_contact }) {
  return (
    <>
      <Welcome />
      <About innerRef={ref_about} />
      <Hometown innerRef={ref_hometown} />
      <Posts innerRef={ref_posts} />
      <Contact innerRef={ref_contact} />
    </>
  )
}

export default Home