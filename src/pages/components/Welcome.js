import WelcomeBgSvg from "./svg/WelcomeBgSvg"

function Background() {
    return (
        <div className="text-gDark w-[750px] overflow-hidden lg:right-[10%] md:right-0 absolute top-[-5rem] -z-10">
            <WelcomeBgSvg />
        </div>
    )
}

function Welcome() {
    return (
        <section className="h-[calc(100vh-80px)] py-48 lg:px-[10%] px-8 mx-auto overflow-hidden max-w-[1300px] relative z-0">
            <Background />
            <h1 className="text-8xl font-bold">
                Hi, I'm <span className="text-brand">Lok</span>.
            </h1>
            <h2 className="text-4xl py-4 text-wLight">
                你好，我叫<span className="text-brand">尤启乐</span>
            </h2>
            <div className="text-2xl text-wDark">
                懂一点网页，懂一点软件开发的咸鱼
            </div>
        </section>
    )
}

export default Welcome