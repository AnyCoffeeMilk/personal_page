import GithubSvg from "../pages/components/svg/GithubSvg"
import CodepenSvg from "../pages/components/svg/CodepenSvg"
import GiteeSvg from "../pages/components/svg/GiteeSvg"

function Header() {
    return (
        <header className="sticky top-0 backdrop-blur-md flex items-center h-20 px-8 gap-4">
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

export default Header