import { post_img } from "../../resource/ImgHandler"
import Paragraph from "../../components/General/Paragraph"
import ArticleTitle from "../../components/General/ArticleTitle"
import Article from "../../components/General/Article"
import ArticleDivider from "../../components/General/ArticleDivider"
import ArticleSubTitle from "../../components/General/ArticleSubTitle"
import NoMoreText from "../../components/General/NoMoreText"
import InfoBox from "../../components/Post/InfoBox"

export default function TailwindPost() {
	return (
		<Article>
			<ArticleTitle>Tailwind — 让你从想名字中解放</ArticleTitle>
			<section>
				<ArticleSubTitle>Tailwind CSS是什么</ArticleSubTitle>
				<div className="flex flex-col sm:flex-row gap-8">
					<InfoBox 
						img={post_img.tailwind}
						items={[
							['原作者', 'Adam Wathan, Steve Schoger'],
							['编程语言', 'Tailwind Labs'],
							['开发者', 'Node.js'],
						]}
					/>
					<Paragraph>
						<p>
							Tailwind CSS是一个开放源代码CSS框架。这个工具库的主要特点是，Bootstrap5 utilities 概念接近，与jQuery UI等其他
							CSS 框架不同，没有为按钮或表格等元素提供一系列预定义类。相对的，会创建一个“工具程式型（Utility）”CSS 类别列表，这
							些类别可用于通过混搭和媒合来设定每个元素的样式。
						</p>
						<p>
							例如，在其他传统系统中，会有一个message-warning类型并套用黄色背景颜色和粗体文字。要在 Tailwind 中实作如此结果，就必
							须套用由工具库建立的一组类别：bg-yellow-200font-bold。
						</p>
						<p>
							由于与 Bootstrap 等预处理CSS概念不同，因此了解 Tailwind 后处理如何建立的理念及其基本用法非常重要。
						</p>
					</Paragraph>
				</div>
			</section>
			<ArticleDivider />
			<section>
				<ArticleSubTitle>工具程式类别 (Utility Classes)</ArticleSubTitle>
				<Paragraph>
					<p>
						工具程式优先概念是指 Tailwind 的主要差异化特征。而非围绕在组件（按钮、面板、选单、文字框...）
						类别，而是围绕特定样式元素（黄色、粗体、非常大的文本、中心元素...）类别。这些类别内的每一个都
						称为工具程式类别。TailwindCSS 中有许多工具程式类别，可以控制大量 CSS 属性，如颜色、边框、显示
						类型（显示）、字体大小和字体、排版、阴影......
					</p>
					<p>
						Tailwind 提供了仅在某些情况下通过媒体查询（Media Query）工具程式类别的可能性，这称为变数。变数的
						主要用途是为各种萤幕尺寸设计响应式使用者界面。元素可以具有的不同状态也有变数，例如鼠标悬停时
						hover:，键盘选择时focus:或按下鼠标时active:，或者当浏览器或操作系统开启了暗模式（dark mode）时。
					</p>
					<p>
						可以通过名为 tailwind.config.js的设定档案设定 Tailwind 提供的工具程式类别和变数。在设定中，您可
						以设定工具程式类别的值，例如调色板或边距元素之间的大小。
					</p>
				</Paragraph>
			</section>
			<NoMoreText />
		</Article>
	)
}