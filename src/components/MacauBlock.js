import { useState } from "react"

function Background({ isHover, setIsHover }) {
    const style = { opacity: isHover===1 ? "80%" : "50%" }
    return (
        <div className="w-[1000px] h-[500px]" style={style}
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(0)} >
            <img className="w-full h-full object-cover blur-sm"
                alt="macau night"
                src="/macau_img.jpg" />
        </div>
    )
}

function Text({ isHover, setIsHover }) {
    const style1 = { display: !(isHover>1) ? "block" : "none" }
    const style2 = { display: isHover>1 ? "block" : "none" }

    return (
        <div className="absolute underline w-[400px] text-center text-4xl font-bold font-[ntFont]"
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(1)} >
            <a href="/" style={style1}>想看看我老家长什么样？</a>
            <a href="/" style={style2}>没什么好看的，真的</a>
        </div>
    )
}

function MacauBlock() {
    const [isHover, setIsHover] = useState(0)

    return (
        <div className="flex items-center justify-center my-32 relative">
            <Background isHover={isHover} setIsHover={(e) => setIsHover(e)} />
            <Text isHover={isHover} setIsHover={(e) => setIsHover(e)} />
        </div>
    )
}

export default MacauBlock