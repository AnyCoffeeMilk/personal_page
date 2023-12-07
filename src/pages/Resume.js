function Title() {
	return (
		<h2 className="text-4xl pb-20 flex items-center font-bold">
			<hr className="mr-6 mt-3 flex-1 border-t-wDark" />
			<span className="text-brand">&lt;</span>简历<span className="text-brand">/&gt;</span>
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
		</div>
	)
}

function Image() {
	return (
		<div className="bg-gDark rounded flex-1 mx-auto lg:mt-0 mt-4 lg:min-w-[300px] max-w-[300px] max-h-[400px] overflow-hidden">
			<img className="h-full w-full object-cover" src="/Personal_page/resume_img.jfif" alt="macau view" />
		</div>
	)
}

function SectionText1() {
    return (
        <ul className="space-y-4 text-lg">
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么奖</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2299年</span>
			</li>
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么奖</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2288年</span>
			</li>
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么奖</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2266年</span>
			</li>
		</ul>
    )
}

function SectionText2() {
    return (
        <div className="space-y-4 text-lg">
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么项目</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2166年</span>
			</li>
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么项目</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2188年</span>
			</li>
			<li className="flex items-center">
				<span className="pr-4">&lt;/&gt;</span>
				<span>不告诉你是什么项目</span>
				<hr className="m-4 flex-1 border-t-wDark" />
				<span>2199年</span>
			</li>
		</div>
    )
}

function Resume() {
	return (
		<div className="px-[10%] pb-[10%] mx-auto max-w-[1300px]">
			<Title />
			<section>
				<div>
                    <SubTitle text="个人简介" />
					<div className="flex lg:flex-row flex-col lg:space-x-8">
						<Description />
						<Image />
					</div>
				</div>
			</section>
            <hr className="my-8 border-t-gDark" />
            <section className="grid lg:grid-cols-2 gap-12">
				<div>
					<SubTitle text="获奖记录" />
					<SectionText1 />
				</div>
				<div>
					<SubTitle text="项目经验" />
					<SectionText2 />
				</div>
            </section>
            <div className="text-wDark my-8">下面就不写了哈。。。</div>
		</div>
	)
}

export default Resume