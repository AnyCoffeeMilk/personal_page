import BrandText from "../General/BrandText"
import MailboxSvg from "./Contact/MailboxSvg"
import TitleText from "../General/TitleText"

export default function Contact({ innerRef }) {
    const mailbox = 'this.isfake@fakemail.com'
    return (
        <section ref={innerRef} className="min-h-screen flex flex-col justify-center items-center">
            <TitleText>
                <BrandText>联络方式</BrandText>
            </TitleText>
            <div className="text-wDark sm:text-lg ">
                我当然不会留真的联络方式，哈哈(๑¯∀¯๑)
            </div>
            <div className="text-lg sm:text-2xl my-4 sm:my-8 flex items-center">
                <MailboxSvg /><span className="pl-2">{mailbox}</span>
            </div>
        </section>
    )
}