import GithubSvg from "./Header/GithubSvg"
import CodepenSvg from "./Header/CodepenSvg"
import GiteeSvg from "./Header/GiteeSvg"

export default function Header() {
    return (
        <header className="sticky z-10 top-0 backdrop-blur-md flex items-center py-4 px-8 gap-4">
            <a className="text-wDark hover:text-brand transition ease-in-out" href="https://github.com/AnyCoffeeMilk">
                <GithubSvg />
            </a>
            <a className="text-wDark hover:text-brand transition ease-in-out" href="https://codepen.io/alanIKL">
                <CodepenSvg />
            </a>
            <a className="text-wDark hover:text-brand transition ease-in-out" href="https://gitee.com/AnyCoffeeMilk">
                <GiteeSvg />
            </a>
        </header>
    )
}