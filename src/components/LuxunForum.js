function Iamge() {
    return (
        <div className="w-[400px] h-[300px]">
            <img className="w-full h-full object-cover"
                alt="luxun img"
                src="/luxun_img.jpg" />
        </div>
    )
}

function Btn() {
    return (
        <div className="mt-auto flex-1 flex justify-end items-end">
            <a href="/" className="
                py-3 px-4 font-semibold
                border-2 border-white 
                transition ease-in-out
                hover:text-[#7f5546] hover:bg-white
                ">进入专栏</a>
        </div>
    )
}

function LuxunForum() {
    return (
        <div className="flex flex-col mt-32 md:flex-row lg:gap-8 gap-4 items-center justify-center font-[ntFont]">
            <Iamge />
            <div className="md:w-[400px] w-full h-[250px] p-8 bg-[#7f5546] flex flex-col">
                <div className="text-4xl font-bold">鲁迅——</div>
                <div className="text-3xl font-['lxFont'] py-8">“我没有说过这句话。”</div>
                <Btn />
            </div>
        </div>
    )
}

export default LuxunForum