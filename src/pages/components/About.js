import { useNavigate } from 'react-router'
import CodingOneSvg from './svg/CodingOneSvg'
import CodingSecSvg from './svg/CodingSecSvg'

function Title() {
    return (
        <h2 className="text-6xl pt-28 pb-8 flex items-center font-bold">
            <span className="text-brand">&lt;</span>关于我<span className="text-brand">/&gt;</span>
            <hr className="ml-6 mt-3 flex-1 border-t-wDark" />
        </h2>
    )
}

function Description() {
    return (
        <div className="lg:space-y-8 space-y-4">
            <p>
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
            </p>
            <p>
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
                这里应该有一段自我介绍，但是我懒得写，哈哈。
            </p>
            <p>
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
                这里应该有一段自我介绍，但是我懒得写，哈哈。这里应该有一段自我介绍，但是我懒得写，哈哈。
            </p>
        </div>
    )
}

function Btn() {
    const navigate = useNavigate();
    return (
        <div className='my-8 transition ease-in-out text-brand' onClick={() => navigate('/Personal_page/resume')}>
            <span className="border border-brand rounded py-3 px-6 hover:bg-brand hover:text-bLight">
                查看简历
            </span>
        </div>
    )
}

function Tag({ text }) {
    return (
        <div className="bg-gDark rounded-full px-2 py-0.5">
            {text}
        </div>
    )
}

function TagSection({ title, tags, Icon }) {
    return (
        <div>
            <h3 className="text-2xl pb-5 flex gap-2 items-center">
                <span className="text-brand">{Icon}</span>{title}
            </h3>
            <div className="flex gap-2 flex-wrap">
                {tags.map((item, i) => <Tag key={i} text={item} />)}
            </div>
        </div>
    )
}

const knowMore = ['HTML', 'CSS', 'JavaScript', 'Kotlin', 'ReactJS', 'Tailwind', 'ReactNative']
const knowLess = ['Python', 'Java', 'PHP', 'Nextjs', 'MySQL', 'VueJS']

function About({ innerRef }) {
    return (
        <section ref={innerRef} className="lg:px-[10%] px-8 mx-auto max-w-[1300px]">
            <Title />
            <div className="md:flex md:space-x-8">
                <div className="text-lg">
                    <Description />
                    <Btn />
                </div>
                <div className="md:min-w-[33%] space-y-12">
                    <TagSection title="这些懂一点" tags={knowMore} Icon={<CodingOneSvg />} />
                    <TagSection title="这些懂半点" tags={knowLess} Icon={<CodingSecSvg />} />
                </div>
            </div>
        </section>
    )
}

export default About