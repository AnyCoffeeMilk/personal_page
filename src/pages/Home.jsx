import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hometown from "../components/Home/Hometown";
import Posts from "../components/Home/Posts";
import Welcome from "../components/Home/Welcome";

export default function Home({ ref_about, ref_hometown, ref_posts, ref_contact }) {
  return (
    <section className="mx-auto px-3 sm:px-6 max-w-[1024px]">
      <Welcome />
      <About innerRef={ref_about} />
      <Hometown innerRef={ref_hometown} />
      <Posts innerRef={ref_posts} />
      <Contact innerRef={ref_contact} />
    </section>
  )
}