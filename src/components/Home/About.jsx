import CodingOneSvg from './About/CodingOneSvg'
import CodingSecSvg from './About/CodingSecSvg'
import BrandText from '../General/BrandText'
import TitleText from "../General/TitleText"
import TitleDivider from "../General/TitleDivider"
import BrandBtn from "./General/BrandBtn"
import Paragraph from "../General/Paragraph"
import TagSection from './About/TagSection'

const knowMore = ['HTML / CSS', 'JavaScript', 'ReactJS', 'TailwindCSS', 'ReactNative']
const knowLess = ['Python', 'C / C++', 'Java', 'PHP', 'Nextjs', 'MySQL', 'VueJS', 'Kotlin', 'SwiftUI']

export default function About({ innerRef }) {
    return (
        <section ref={innerRef} className='min-h-screen'>
            <TitleText>
                <BrandText>关于我</BrandText>
                <TitleDivider />
            </TitleText>
            <div className="md:flex md:space-x-8">
                <div>
                    <Paragraph>
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
                            这里应该有一段自我介绍，但是我懒得写，哈哈。
                        </p>
                    </Paragraph>
                    <BrandBtn relUrl='resume'>
                        查看简历
                    </BrandBtn>
                </div>
                <div className="md:min-w-[33%] space-y-6 sm:space-y-12">
                    <TagSection tags={knowMore}>
                        <CodingOneSvg />这些懂一点
                    </TagSection>
                    <TagSection tags={knowLess}>
                        <CodingSecSvg />这些懂半点
                    </TagSection>
                </div>
            </div>
        </section>
    )
}