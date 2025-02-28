import BrandText from "../BrandText"

export default function IconBtn() {
    const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return (
        <div onClick={handleClick} className="font-extrabold text-center py-2 px-4 md:px-2 md:py-7 cursor-pointer">
            <BrandText>IKL</BrandText>
        </div>
    )
}