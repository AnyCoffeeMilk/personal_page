import Paragraph from "../../components/General/Paragraph"
import NoMoreText from "../../components/General/NoMoreText"
import ArticleTitle from "../../components/General/ArticleTitle"
import Article from "../../components/General/Article"
import ArticleDivider from "../../components/General/ArticleDivider"
import ArticleSubTitle from "../../components/General/ArticleSubTitle"
import { post_img } from "../../resource/ImgHandler"
import InfoBox from "../../components/Post/InfoBox"

export default function ReactPost() {
	return (
		<Article>
			<ArticleTitle>ReactJS — 让你爱上模块化编程</ArticleTitle>
			<section>
				<ArticleSubTitle>ReactJS是什么</ArticleSubTitle>
				<div className="flex flex-col sm:flex-row gap-8">
					<Paragraph>
						<p>
							React（也称为React.js或ReactJS）是一个自由及开放源代码的前端JavaScript工具库，用于基于UI组件构建用户界面。
						</p>
						<p>
							它由Meta（前身为Facebook）和由个人开发者和公司组成的社群维护。
							React可用作开发具有Next.js等框架的单页、手机或服务器渲染应用程序的基础。
							然而，React只专注状态管理和将状态渲染到DOM，
							因此创建React应用程序通常需要使用额外的工具库来进行路由实现，以及某些客户端功能。
						</p>
						<p>
							在本文中，我们将向 React 打个招呼。我们将探索其背后与范例的一些细节，在自己电脑设置基本的 React 工具链环境，
							并建立一个简单入门的应用程式——好了解 React 基本架构。
						</p>
					</Paragraph>
					<InfoBox
						img={post_img.react}
						items={[
							['原作者', 'Jordan Walke'],
							['编程语言', 'JavaScript'],
							['开发者', 'Meta开源及其社区'],
						]}
					/>
				</div>
			</section>
			<ArticleDivider />
			<section>
				<ArticleSubTitle>Hello React</ArticleSubTitle>
				<Paragraph>
					<p>
						正如其官方标语所述，React是一个用来建构使用者介面的函式库。 React 不是框架——它甚至不是 web 独有的开发技术，
						它可以和其他函式库或套件搭配使用，以在特定环境中渲染。例如，React Native可用来建立手机应用程式；React 360可
						以用来建立 VR 应用程式；除此之外还有很多的可能性。
					</p>
					<p>
						为了要建构 web，开发者将 React 与ReactDOM搭配使用。 React 与 ReactDOM 的组合经常与其他 web 开发框架相提并
						论——以用于解决相同的问题。当我们称呼 React 为「框架（framework）」时，我们是使用口语化的理解好加以讨论。
					</p>
					<p>
						React 的主要目标是最大限度减少开发者建构 UI 介面时出现的错误。它通过使用元件——描述部分使用者界面且自成一体的逻辑与
						程式码段落来实现这点。这些元件可以组合在一起以建立完整的 UI 界面，React将大部分的渲染逻辑给抽象化出来，让你可以专
						注于 UI 层的程式设计。
					</p>
				</Paragraph>
			</section>
			<NoMoreText />
		</Article>
	)
}