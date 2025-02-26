import BrandText from "../components/General/BrandText";
import TitleText from "../components/General/TitleText";

export default function NoMatch() {
    return (
        <section className="min-h-[calc(100vh-64px)] pb-[64px] flex flex-col justify-center items-center">
            <TitleText>
                <BrandText>Forbidden 404</BrandText>
            </TitleText>
            <div className="text-wDark text-lg sm:py-8">
                请不要乱填网址
            </div>
        </section>
    )
}