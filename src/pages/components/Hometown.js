import { useNavigate } from "react-router"

function Title() {
    return (
        <div className="text-6xl pt-28 pb-8 flex items-center font-bold">
            <hr className="mr-6 mt-3 flex-1 border-t-wDark" />
            <span className="text-brand">&lt;</span>我的家乡<span className="text-brand">/&gt;</span>
        </div>
    )
}

function Image() {
    return (
        <div className="bg-gDark rounded flex-1 h-[55vh] overflow-hidden">
            <img className="h-full object-cover" src="/personal_page/macau_img.jpg" alt="macau view" />
        </div>
    )
}

function Description() {
    return (
        <div className="lg:space-y-8 space-y-4">
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
        </div>
    )
}

function Btn() {
    const navigate = useNavigate()
    return (
        <div className="text-end mt-8 transition ease-in-out " onClick={() => navigate('gallery')}>
            <span className="border border-brand text-brand cursor-pointer rounded py-3 px-6 hover:bg-brand hover:text-bLight">
                查看相册
            </span>
        </div>
    )
}

function Hometown({ innerRef }) {
    return (
        <section ref={innerRef} className="lg:px-[10%] px-8 mx-auto max-w-[1300px]">
            <Title />
            <div className="md:flex md:space-x-8">
                <Image />
                <div className="text-lg md:max-w-[33%] md:mt-0 mt-8">
                    <Description />
                    <Btn />
                </div>
            </div>
        </section>
    )
}

export default Hometown