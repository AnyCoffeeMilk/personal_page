function Title() {
	return (
		<h2 className="text-4xl pb-20 flex items-center font-bold">
			<hr className="mr-6 mt-3 flex-1 border-t-wDark" />
			<span className="text-brand">&lt;</span>Tailwind — 让你从想名字中解放<span className="text-brand">/&gt;</span>
			<hr className="ml-6 mt-3 flex-1 border-t-wDark" />
		</h2>
	)
}

function SubTitle({ text }) {
	return (
		<h2 className="text-2xl pb-4 flex items-center font-bold">
			<span className="text-brand">&lt;</span>{text}<span className="text-brand">/&gt;</span>
		</h2>
	)
}

function Description() {
	return (
		<div className="space-y-8 text-lg">
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
		</div>
	)
}

function Image() {
	return (
		<div className="bg-gDark rounded flex-1 mt-2 w-[35vh] h-[32vh] overflow-hidden">
			<img className="h-full object-cover" src="/personal_page/posts/tailwind1.jpg" alt="macau view" />
		</div>
	)
}

function SectionText() {
    return (
        <div className="space-y-8 text-lg">
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
		</div>
    )
}

function TailwindPost() {
    return (
        <div className="lg:px-[10%] px-8 pb-[10%] mx-auto max-w-[1300px]">
			<Title />
			<section>
				<div>
                    <SubTitle text="Tailwind CSS是什么" />
					<div className="flex space-x-8">
						<div>
							<Image />
							<div className="pt-4 grid grid-cols-[60px_1fr]">
								<span>原作者</span><span className="text-end">Adam Wathan, Steve Schoger</span>
								<span>开发者</span><span className="text-end">Tailwind Labs</span>
								<span>系统平台</span><span className="text-end">Node.js</span>
							</div>
						</div>
						<Description />
					</div>
				</div>
			</section>
            <hr className="my-8 border-t-gDark" />
            <section>
                <SubTitle text="工具程式类别 (Utility Classes)" />
                <SectionText />
            </section>
            <div className="text-wDark my-8">下面就不写了哈。。。</div>
		</div>
    )
}

export default TailwindPost