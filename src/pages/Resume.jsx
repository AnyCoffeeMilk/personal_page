import Article from "../components/General/Article"
import ArticleDivider from "../components/General/ArticleDivider"
import ArticleSubTitle from "../components/General/ArticleSubTitle"
import ArticleTitle from "../components/General/ArticleTitle"
import NoMoreText from "../components/General/NoMoreText"
import Paragraph from "../components/General/Paragraph"
import ListBlock from "../components/Resume/ListBlock"
import TextYearItem from "../components/Resume/TextYearItem"
import { home_img } from "../resource/ImgHandler"

function Image() {
	return (
		<div className="bg-gDark rounded flex-1 mx-auto sm:min-w-[300px] max-w-[300px] max-h-[400px] overflow-hidden">
			<img className="h-full w-full object-cover" src={home_img.resume} alt="a cute cat" />
		</div>
	)
}

export default function Resume() {
	return (
		<Article>
			<ArticleTitle>简历</ArticleTitle>
			<section>
				<ArticleSubTitle>个人简介</ArticleSubTitle>
				<div className="flex flex-col sm:flex-row gap-8">
					<Paragraph>
						<p>
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
						</p>
						<p>
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
							这里应该有一段个人简介，但是我懒得写，哈哈。
						</p>
						<p>
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
							这里应该有一段个人简介，但是我懒得写，哈哈。这里应该有一段个人简介，但是我懒得写，哈哈。
						</p>
					</Paragraph>
					<Image />
				</div>
			</section>
			<ArticleDivider />
			<section className="grid lg:grid-cols-2 gap-6 sm:gap-12">
				<ListBlock title="获奖记录">
					<TextYearItem year={2299}>不告诉你是什么奖</TextYearItem>
					<TextYearItem year={2288}>不告诉你是什么奖</TextYearItem>
					<TextYearItem year={2266}>不告诉你是什么奖</TextYearItem>
				</ListBlock>
				<ListBlock title="项目经验">
					<TextYearItem year={2166}>不告诉你是什么项目</TextYearItem>
					<TextYearItem year={2188}>不告诉你是什么项目</TextYearItem>
					<TextYearItem year={2199}>不告诉你是什么项目</TextYearItem>
				</ListBlock>
			</section>
			<NoMoreText />
		</Article>
	)
}