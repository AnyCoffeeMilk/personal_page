import WelcomeBgSvg from "./Welcome/WelcomeBgSvg"

function Background() {
    return (
        <div className="text-gDark w-[90%] sm:w-[75%]">
            <WelcomeBgSvg />
        </div>
    )
}

export default function Welcome() {
    return (
        <section className="h-[calc(100vh-64px)] pb-[64px] mx-2 md:mx-12 flex items-center relative z-0">
            <div className="absolute h-full w-full -right-0 -z-10 flex justify-end">
                <Background />
            </div>
            <div>
                <h1 className="text-6xl sm:text-8xl font-bold whitespace-nowrap">
                    Hi, I'm <span className="text-brand">Lok</span>.
                </h1>
                <h2 className="text-2xl sm:text-4xl py-4 text-wLight">
                    你好，我叫<span className="text-brand">尤启乐</span>
                </h2>
                <div className="text-lg sm:text-2xl text-wDark">
                    懂一点网页，懂一点软件开发的咸鱼
                </div>
            </div>
        </section>
    )
}