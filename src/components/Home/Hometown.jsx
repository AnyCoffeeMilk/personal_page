import { home_img } from "../../resource/ImgHandler"
import BrandText from "../General/BrandText"
import TitleText from "../General/TitleText"
import TitleDivider from "../General/TitleDivider"
import BrandBtn from "./General/BrandBtn"
import Paragraph from "../General/Paragraph"

function Image() {
    return (
        <div className="bg-gDark rounded flex-1 md:h-[55vh] overflow-hidden">
            <img className="h-full object-cover" src={home_img.hometown} alt="macau view" />
        </div>
    )
}

function Hometown({ innerRef }) {
    return (
        <section ref={innerRef} className="min-h-screen">
            <TitleText>
                <BrandText>我的家乡</BrandText>
                <TitleDivider />
            </TitleText>
            <div className="md:flex md:space-x-8">
                <Image />
                <div className="text-lg md:max-w-[33%] mt-4 sm:mt-8 md:mt-0">
                    <Paragraph>
                        <p>
                            这里应该有一段关于澳门的描述，但是我懒得写，哈哈。
                        </p>
                        <p>
                            这里应该有一段关于澳门的描述，但是我懒得写，哈哈。这里应该有一段关于澳门的描述，但是我懒得写，哈哈。
                            这里应该有一段关于澳门的描述，但是我懒得写，哈哈。这里应该有一段关于澳门的描述，但是我懒得写，哈哈。
                        </p>
                        <p>
                            这里应该有一段关于澳门的描述，但是我懒得写，哈哈。这里应该有一段关于澳门的描述，但是我懒得写，哈哈。
                        </p>
                    </Paragraph>
                    <BrandBtn relUrl='gallery'>
                        查看相册
                    </BrandBtn>
                </div>
            </div>
        </section>
    )
}

export default Hometown