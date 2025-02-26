export default function BrandText({ children }) {
    return (
        <span className="flex">
            <div className="text-brand">&lt;</div>
            {children}
            <div className="text-brand">/&gt;</div>
        </span>
    )
}