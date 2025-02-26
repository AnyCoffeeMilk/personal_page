import { home_img } from "../../resource/ImgHandler"
import BrandText from "../General/BrandText"
import TitleText from "../General/TitleText"
import TitleDivider from "../General/TitleDivider"
import PostItem from "./Posts/PostItem"

const postsData = [
    {
        title: "ReactJS — 让你爱上模块化编程",
        text: "ReactJS是一个自由及开放源代码的前端JavaScript工具库，用于基于...",
        tags: ['ReactJS', '网页开发', '科普'],
        img: home_img.posts.react,
        page: "post/react"
    },
    {
        title: "Tailwind — 让你从想名字中解放",
        text: "Tailwind CSS是一个开放源代码CSS框架。这个工具库的主要特点是，...",
        tags: ['TailwindCSS', '网页开发', '科普'],
        img: home_img.posts.tailwind,
        page: "post/tailwind"
    },
    {
        title: "关于鲁迅先生没说过的那些话",
        text: "鲁迅:这话我真没说过... \"网上95%的名人名言都是瞎掰，包括这句。...",
        tags: ['鲁迅', '科普', '闲聊'],
        img: home_img.posts.lunxun,
        page: "post/luxun"
    }
]

function Posts({ innerRef }) {
    const mapPosts = postsData.map((post, i) => (
        <PostItem
            key={i}
            title={post.title}
            text={post.text}
            tags={post.tags}
            img_src={post.img}
            page={post.page}
        />
    ))

    return (
        <section ref={innerRef} className="min-h-screen">
            <TitleText>
                <TitleDivider />
                <BrandText>以往专栏</BrandText>
                <TitleDivider />
            </TitleText>
            <div className="gap-8 sm:grid grid-cols-2 md:grid-cols-none">
                {mapPosts}
            </div>
        </section>
    )
}

export default Posts