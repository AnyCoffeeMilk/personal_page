function Title() {
	return (
		<h2 className="text-4xl pb-12 flex items-center font-bold">
			<hr className="mr-6 mt-3 flex-1 border-t-wDark" />
			<span className="text-brand">&lt;</span>关于鲁迅先生没说过的那些话<span className="text-brand">/&gt;</span>
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
                周树人（1881年9月25日—1936年10月19日），原名周樟寿，字豫山、豫亭，后改字豫才，笔名鲁迅，浙江绍兴人，
                为中国近代作家，新文化运动领袖之一，鲁迅生前创作了杂文、短中篇小说、文学、思想和社会评论、学术著作、
                自然科学著作、古代典籍校勘与研究、散文、现代散文诗、旧体诗、外国文学与学术翻译作品和木刻版画的研究，
                对于五四运动以后的中国社会思想文化发展产生了极大影响，韩国文学评论家金良守称他为“二十世纪东亚文化地
                图上占最大领土的作家”，鲁迅在中国有“民族魂”之称。
			</p>
		</div>
	)
}

function Image() {
	return (
		<div className="bg-gDark lg:mt-0 mt-4 rounded min-w-[400px] lg:max-h-[250px] overflow-hidden">
			<img className="h-full w-full object-cover" src="/Personal_page/posts/luxun1.jpg" alt="macau view" />
		</div>
	)
}

function SectionText() {
    return (
        <div className="space-y-8 text-lg">
            <p>
                清光绪七年八月初三（1881年9月25日），鲁迅出生于浙江省绍兴府会稽县府城内东昌坊口（周家西门口西轴线上，今
                属绍兴市越城区鲁迅中路229号鲁迅故居西次间楼下，鲁迅纪念馆西侧）的书香门第，覆盆桥周氏家族
                ，名为周樟寿。祖父周福清（1838—1904年），同治十年（1871年）进士，选翰林院庶吉士，江西金溪县知县，捐
                内阁中书。父亲周伯宜（1861—1896），秀才出身。
			</p>
			<p>
                鲁迅童年生活于百草园、咸亨酒店、外婆家一带的农村等地，成为后来鲁迅的两部小说集《呐喊》、《彷徨》和散文集《朝花
                夕拾》的重要素材来源。鲁迅颇受进化论思想影响，爱读新思想的书，尤其是翻译的小说。
			</p>
			<p>
                1892年（光绪18年），10岁就读于家乡寿镜吾开设的私塾三味书屋。
			</p>
		</div>
    )
}

function LuxunPost() {
    return (
        <div className="lg:px-[10%] px-8 pb-[10%] mx-auto max-w-[1300px] space-y-8 text-lg">
			<Title />
            <section>
                <p>
                    我没说过这句话：鲁迅”——在网上各色“名人名言”层出不穷的当下，经常被用在表情包上的这句话，似乎已经变成鲁迅先生
                    最广为流传的名言了。如今好像只要在一句话后面加个破折号，再加个名人名字就成了一句“名言”。比如这样——“真正睿智
                    的人，都会在读到这里时点个赞，并分享到朋友圈。——沃•兹基硕德”。
                </p>
			</section>
			<section>
				<div>
                    <SubTitle text="鲁迅是谁" />
                    <div className="lg:flex lg:space-x-8">
                        <Description />
                        <Image />
                    </div>
				</div>
			</section>
            <hr className="my-8 border-t-gDark" />
            <section>
                <SubTitle text="鲁迅生平" />
                <SectionText />
            </section>
            <div className="text-wDark my-8">下面就不写了哈。。。</div>
		</div>
    )
}

export default LuxunPost