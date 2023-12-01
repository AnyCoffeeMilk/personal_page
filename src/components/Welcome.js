function Background() {
    return (
        <img className="object-cover w-full h-[80vh] opacity-80 fixed"
            src="/doge_bg.jpg" 
            alt="doge background" />
    )
}

function Welcome() {
    return (
        <div className="relative w-full h-[80vh] font-bold font-['chFont'] z-0">
            <Background />
            <div className="
                absolute top-0 left-0 
                w-full h-full pb-20
                flex flex-col justify-end items-center gap-4  
                bg-gradient-to-b from-transparent from-90% to-black to-100%">
                <div className="text-4xl md:text-6xl">Welcome to Dogeland</div>
                <div className="text-2xl">尤启乐</div>
            </div>
        </div>
    )
}

export default Welcome