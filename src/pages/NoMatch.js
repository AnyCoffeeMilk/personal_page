function NoMatch() {
    return (
        <section className="h-[calc(100vh-80px)] flex flex-col justify-center items-center px-[9.6em] mx-auto max-w-[1300px]">
            <div className="text-6xl font-bold">
                <span className="text-brand">&lt;</span>Forbidden 404<span className="text-brand">/&gt;</span>
            </div>
            <div className="text-wDark text-lg py-8">
                请不要乱填网址
            </div>
        </section>
    )
}

export default NoMatch