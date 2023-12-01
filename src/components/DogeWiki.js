function Image({ src }) {
    return (
        <img src={src} alt={src}
            className="object-cover w-full h-full"
        />
    )
}

function Text() {
    return (
        <div className="flex flex-col justify-center h-full gap-2 whitespace-nowrap">
            <div className="pl-3 w-2/3 py-2 text-8xl bg-white text-black">狗头</div>
            <div className="pl-3 pt-1 flex gap-1 text-3xl">
                <div className="bg-white text-black px-1 rotate-12">
                    <div className="-rotate-12">梗</div>
                </div>
                <div>文</div>
                <div>化</div>
            </div>
        </div>
    )
}

function Btn() {
    return (
        <a href="/" className="absolute overflow-hidden bottom-8 right-0 w-1/4 bg-white text-yellow-700">
            <div className="w-full h-full">
                <div className="py-2 text-center bg-transparent whitespace-nowrap">深入了解</div>
                <div className="absolute transition ease-in-out duration-75 hover:translate-x-[-45%] top-0 bg-transparent w-[200%] h-full">
                    <div className="border-2 absolute bottom-1.5 right-0 w-1/2 border-yellow-700 rounded-md" />
                </div>
            </div>
        </a>
    )
}

function DogeWiki() {
    return (
        <div className="relative mx-auto font-[chFont] lg:w-[1000px] w-full lg:h-[616px] lg:pb-0 sm:pb-[61.6%] h-[75vh]">
            <div className="flex absolute w-full h-full">
                <div className="flex-1 h-full flex md:flex-col flex-col-reverse">
                    <div className="bg-yellow-700 w-full h-[61.6%] relative">
                        <Text />
                        <Btn />
                    </div>
                    <div className="flex flex-1">
                        <div className="w-[61.6%] h-full">
                            <Image src="/doges/doge4.jfif" />
                        </div>
                        <div className="flex-1 h-full flex flex-col">
                            <div className="w-full flex-1">
                                <Image src="/doges/doge3.png" />
                            </div>
                            <div className="w-full h-[61.6%]">
                                <Image src="/doges/doge1.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[61.6%] md:block hidden h-full bg-white">
                    <Image src="/doges/doge2.png" />
                </div>
            </div>
        </div>
    )
}

export default DogeWiki