import MailboxSvg from "./svg/MailboxSvg"

function Title() {
    return (
        <div className="text-6xl font-bold">
            <span className="text-brand">&lt;</span>联络方式<span className="text-brand">/&gt;</span>
        </div>
    )
}

function Contact({ innerRef }) {
    const mailbox = 'this.isfake@fakemail.com'
    return (
        <section ref={innerRef} className="h-screen flex flex-col justify-center items-center px-[9.6em] mx-auto max-w-[1300px]">
            <Title />
            <div className="text-wDark text-lg py-8">
                我当然不会留真的联络方式，哈哈(๑¯∀¯๑)
            </div>
            <div className="text-2xl flex items-center">
                <MailboxSvg /><span className="pl-2">{mailbox}</span>
            </div>
        </section>
    )
}

export default Contact