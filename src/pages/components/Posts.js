const postsData = [
    {
        title: "ReactJS — 让你爱上模块化编程",
        tags: ['ReactJS', '网页开发', '科普'],
        text: "ReactJS是一个自由及开放源代码的前端JavaScript工具库，用于基于...",
        img: "/Personal_page/react_img.png",
        page: "/Personal_page/react"
    },
    {
        title: "Tailwind — 让你从想名字中解放",
        tags: ['TailwindCSS', '网页开发', '科普'],
        text: "Tailwind CSS是一个开放源代码CSS框架。这个工具库的主要特点是，...",
        img: "/Personal_page/tailwind_img.jpg",
        page: "/Personal_page/tailwind"
    },
    {
        title: "关于鲁迅先生没说过的那些话",
        text: "鲁迅:这话我真没说过... \"网上95%的名人名言都是瞎掰，包括这句。...",
        tags: ['鲁迅', '科普', '闲聊'],
        img: "/Personal_page/luxun_img.jpg",
        page: "/Personal_page/luxun"
    }
]

function Title() {
    return (
        <div className="text-6xl pt-24 pb-8 flex items-center font-bold">
            <hr className="mr-6 mt-3 flex-1 border-t-wDark" />
            <span className="text-brand">&lt;</span>以往专栏<span className="text-brand">/&gt;</span>
            <hr className="ml-6 mt-3 flex-1 border-t-wDark" />
        </div>
    )
}

function Image({ img }) {
    return (
        <div className="bg-gDark rounded md:w-[16em] md:h-[9em] h-[50vh] overflow-hidden">
            <img className="w-full md:h-full object-cover" src={img} alt="something is here" />
        </div>
    )
}

function Tags({ texts }) {
    return (
        <div className="flex gap-2 flex-wrap my-2">
            { texts.map((text, i) => (
                <div key={i} className="bg-gDark rounded-full px-2 py-0.5">
                    {text}
                </div>
            )) }
        </div>
    )
}

function Btn({ url }) {
    const style = 'border whitespace-nowrap border-brand text-brand rounded py-3 px-6 hover:bg-brand hover:text-bLight'
    return (
        <div className="md:mb-2.5 md:mt-auto my-6 transition w-[110px] ease-in-out">
            <a href={url} className={style}>
                进入专栏
            </a>
        </div>
    )
}

function Post({ title, text, tags, img_src, page }) {
    return (
        <div className="md:flex gap-8 border-b border-gDark pb-4">
            <Image img={img_src} />
            <div className="flex-1">
                <h3 className="text-2xl md:pt-0 pt-4">
                    {title}
                </h3>
                <div className="text-wDark text-lg ">
                    {text}
                </div>
                <Tags texts={tags} />
            </div>
            <Btn url={page} />
        </div>
    )
}

function Posts({ innerRef }) {
    const handlePostMap = () => {
        return postsData.map((post, i) => (
            <Post key={i} 
                title={post.title} 
                text={post.text} 
                tags={post.tags} 
                img_src={post.img} 
                page={post.page}
            />
        ))
    }

    return (
        <section ref={innerRef} className="lg:px-[10%] px-8 mx-auto max-w-[1300px]">
            <Title />
            <div className="space-y-8">
                { handlePostMap() }
            </div>
        </section>
    )
}

export default Posts