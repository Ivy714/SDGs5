// ===== FLIP CARDS DATA =====
const FLIP_CARDS = [
    { 
        tag: 'Did you know?', 
        title: '教育差距', 
        color: 'var(--muted-sage)', 
        back: '全球有高達 1.19 億名女童被迫失學，受教育機會的匱乏，依然是她們翻轉命運、實現自我最大的阻礙。',
        sourceName: 'UNICEF 聯合國兒童基金會',
        sourceUrl: 'https://www.unicef.org/education/girls-education'
    },
    { 
        tag: 'Global Fact', 
        title: '薪資不平等', 
        color: 'var(--dusty-amethyst)', 
        back: '全球女性平均薪資比男性低 20%。在相同職位與資歷下，這個差距依然存在——這在經濟學上被稱為「無法解釋的薪酬差距」。',
        sourceName: 'ILO 國際勞工組織',
        sourceUrl: 'https://www.un.org/en/observances/equal-pay-day' 
    },
{ 
        tag: 'Think About It', 
        title: '家務分配', 
        color: '#B8A99A', 
        back: '女性每天花在無酬家務與照護工作上的時間，平均是男性的2.5倍。這些工作支撐了整個社會的運作，卻鮮少被計入 GDP。',
        sourceName: 'UN Women 聯合國婦女署',
        sourceUrl: 'https://www.unwomen.org/en/articles/faqs/faqs-what-is-unpaid-care-work-and-how-does-it-power-the-economy'
    },
{ 
        tag: 'Leadership', 
        title: '政治參與', 
        color: 'var(--muted-sage)', 
        back: '截至 2026 年，全球國會席次中女性僅佔 27.5%。儘管比例微幅上升，但專家警告，以目前每年不到 0.5% 的龜速進展，要達到真正的性別平權，還要再等至少 75 年。',
        sourceName: 'IPU 各國議會聯盟',
        sourceUrl: 'https://www.ipu.org/news/press-releases/2026-03/womens-representation-in-parliament-sees-sluggish-gains'
    },
{ 
        tag: 'Did you know?', 
        title: '科技性別鴻溝', 
        color: 'var(--dusty-amethyst)', 
        back: '全球 STEM（科技）產業的女性佔比僅 28.2%。這意味著設計未來的力量，至今仍由單一視角主導。',
        sourceName: 'WEF 世界經濟論壇',
        sourceUrl: 'https://www.weforum.org/publications/global-gender-gap-report-2024/in-full/economic-and-leadership-gaps-constraining-growth-and-skewing-transitions-7b05a512cb/' 
    },
    { 
        tag: 'Social Reality', 
        title: '暴力問題', 
        color: '#B8A99A', 
        back: '全球約有三分之一（30%）的女性，在一生中曾遭受身體或性暴力。這是世界上最普遍、卻最常被隱忍的人權侵犯之一。',
        sourceName: 'WHO 世界衛生組織',
        sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/violence-against-women'
    },
    { 
       tag: 'Progress', 
        title: '法律保障', 
        color: 'var(--muted-sage)', 
        back: '全球女性享有的法定權利僅為男性的 64%，法律條文與實際執行之間的落差巨大，全球平均落實率不到 40%。',
        sourceName: 'World Bank 世界銀行',
        sourceUrl: 'https://www.worldbank.org/en/news/press-release/2024/03/04/new-data-show-massive-wider-than-expected-global-gender-gap'
    },
    { 
        tag: 'Health', 
        title: '生育健康', 
        color: 'var(--dusty-amethyst)', 
        back: '每天仍有約 800 位女性死於可預防的孕產期併發症。其中高達 95% 發生在中低收入國家，凸顯了醫療資源不平等的致命影響。',
        sourceName: 'WHO 世界衛生組織',
        sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality'
    }
];

// ===== QUIZ DATA =====
const QUIZ_QUESTIONS = {
    female: [
        { q: '你在會議中提出了一個想法，但沒有人回應。十分鐘後，同事說了相同的話，大家都表示贊同。你的感受是？', options: ['習以為常，這種事常發生', '感到不舒服，但不知道怎麼說', '會直接指出：「這是我剛才說的」', '認為可能只是巧合'], reflection: '研究顯示，女性在職場中的發言被打斷或忽視的頻率是男性的 2 倍。你的感受，很多人都有。' },
        { q: '你比同組男性同事完成了更多工作，但年終評估時，他的評分比你高。你會怎麼做？', options: ['接受現實，繼續努力', '找主管談，要求說明', '懷疑自己是否有什麼做得不夠好', '和同事分享，看看大家是否有類似情況'], reflection: '績效評估中的偏見是有記錄的現象。你的選擇反映了面對不公平時不同的應對策略——每一種都值得被理解。' },
        { q: '你在深夜獨自走在街上，你最先想到的是什麼？', options: ['我應該打電話給朋友', '我需要快點走，別讓人注意我', '我應該把鑰匙夾在手指間', '感到焦慮，但說不清楚為什麼'], reflection: '這種焦慮不是個人問題，而是社會現實的反映。「夜晚的城市」對不同性別有著截然不同的含義。' },
    ],
    male: [
        { q: '你的朋友正在哭泣，情緒崩潰。你的第一反應是什麼？', options: ['試圖找解決方案讓他冷靜下來', '感到有些手足無措，不知道怎麼陪', '給他一個擁抱，讓他知道你在這裡', '說「男人不能這樣」，試圖讓他振作'], reflection: '我們從小被教導「男人要堅強」，但情緒表達是每個人的基本需求。你如何回應，反映了你如何理解「陽剛」的定義。' },
        { q: '你想要在生完小孩後，請幾個月的育嬰假照顧孩子。你最擔心的是什麼？', options: ['老闆可能覺得我不夠投入', '同事的眼光和看法', '這段時間的收入影響', '完全沒有顧慮，我有這個權利'], reflection: '全球男性育嬰假使用率普遍偏低，即使在有支薪假的國家也是如此。「社會壓力」比制度更難改變。' },
        { q: '在一個聚會上，有人說「男人就應該負責養家」。你的反應是？', options: ['覺得有些不舒服，但沒有出聲', '認同，這是傳統價值', '當場表示不認同，說出自己的看法', '轉移話題，避免衝突'], reflection: '沉默有時也是一種選擇。如何在日常對話中面對性別刻板印象，是每個人都在摸索的課題。' },
    ],
    nonbinary: [
        { q: '你填寫一份表格，性別欄只有「男」和「女」兩個選項。你的感受是什麼？', options: ['無奈，這已經是日常', '感到被忽視和不被承認', '選一個離我最近的，繼續走', '留白，或在空白處寫下自己的答案'], reflection: '「二元選擇」的設計並不中立。每一個「無法勾選」的選項，都是對某些人存在的否認。' },
        { q: '你在自我介紹時，想要分享自己的代詞（例如 they/them）。你會怎麼做？', options: ['直接說出來，這是我的身份', '評估當下環境，再決定是否說', '不說，只告訴親近的人', '還在思考如何開口'], reflection: '「要不要說」背後，涉及的是安全感與被接納的需求。每一個選擇，都是在特定環境下做出的最好判斷。' },
        { q: '你身邊有人不斷用你出生時的性別來稱呼你。你的應對方式是什麼？', options: ['每次都糾正，不管對方的反應', '選擇性地糾正，視關係深淺', '感到疲憊，有時候決定算了', '試圖理解對方，同時表達自己的感受'], reflection: '這種疲憊是真實的——被看見的代價不應該只由一方承擔。你的每一種回應方式，都在守護你自己的存在。' },
    ],
    other: [
        { q: '當有人問起你的性別，你通常會怎麼回答？', options: ['直接說出自己的身份認同', '根據不同場合給不同的答案', '覺得這個問題本身就很奇怪', '還在探索，還沒有確定的答案'], reflection: '性別不是一個需要「向別人解釋清楚」的答案。你正在探索的過程本身，就是你的故事。' },
        { q: '在討論性別議題的場合，你的感受通常是？', options: ['覺得這些討論很重要，我想參與', '感到疲憊，因為要解釋太多', '好奇，想多了解不同的觀點', '有些距離感，不確定自己屬於哪裡'], reflection: '無論你站在哪個位置，性別議題都在某種程度上與你的生活相交。你的視角，也是這個對話不可或缺的一部分。' },
        { q: '你認為「性別平等」最需要改變的是什麼？', options: ['法律和制度層面的保障', '教育和觀念的改變', '日常語言和互動方式', '結構性的經濟不平等'], reflection: '每一個選項背後，都有無數人的故事。這些改變不是非此即彼的——它們彼此連結，共同構成我們需要的未來。' },
    ],
};

const GENDER_OPTIONS = [
    { id: 'female', label: '女性', emoji: '♀', color: 'var(--dusty-amethyst)' },
    { id: 'male', label: '男性', emoji: '♂', color: 'var(--muted-sage)' },
    { id: 'nonbinary', label: '非二元', emoji: '⚧', color: '#B8A99A' },
    { id: 'other', label: '其他 / 不想說', emoji: '◎', color: 'var(--warm-gray)' },
];

// ===== BALANCE COUNTRIES DATA =====
const COUNTRIES = [
    { name: '冰島', nameEn: 'Iceland', ggi: 0.912, note: '連續 14 年全球第一，是性別平等的典範。' },
    { name: '挪威', nameEn: 'Norway', ggi: 0.879, note: '北歐國家在政治參與與薪資平等方面領先全球。' },
    { name: '芬蘭', nameEn: 'Finland', ggi: 0.863, note: '全球第一個選出女性總統的國家。' },
    { name: '瑞典', nameEn: 'Sweden', ggi: 0.815, note: '男性育嬰假使用率全球最高之一。' },
    { name: '紐西蘭', nameEn: 'New Zealand', ggi: 0.797, note: '首位帶嬰兒進入聯合國大會的女性領導人。' },
    { name: '德國', nameEn: 'Germany', ggi: 0.763, note: '科技與工程領域女性比例仍有待提升。' },
    { name: '加拿大', nameEn: 'Canada', ggi: 0.770, note: '聯邦內閣實現了性別均等組成。' },
    { name: '英國', nameEn: 'United Kingdom', ggi: 0.753, note: '薪酬透明立法是近年重要進展。' },
    { name: '法國', nameEn: 'France', ggi: 0.756, note: '2000 年立法要求政治候選人性別均等。' },
    { name: '美國', nameEn: 'United States', ggi: 0.748, note: '2020 年迎來首位女性副總統。' },
    { name: '日本', nameEn: 'Japan', ggi: 0.647, note: '在政治與經濟參與方面仍有顯著差距。' },
    { name: '南韓', nameEn: 'South Korea', ggi: 0.680, note: '教育平等已達成，但職場性別差距依然存在。' },
    { name: '臺灣', nameEn: 'Taiwan', ggi: 0.725, note: '2016 年選出首位女性總統，教育平等領先亞洲。' },
    { name: '中國', nameEn: 'China', ggi: 0.678, note: '經濟參與有所提升，但政治代表性仍低。' },
    { name: '印度', nameEn: 'India', ggi: 0.629, note: '教育差距逐步縮小，但安全與健康問題持續存在。' },
    { name: '巴西', nameEn: 'Brazil', ggi: 0.710, note: '議會女性比例偏低，但社會運動活躍。' },
    { name: '奈及利亞', nameEn: 'Nigeria', ggi: 0.604, note: '部分地區女童受教育機會仍受限制。' },
    { name: '葉門', nameEn: 'Yemen', ggi: 0.494, note: '全球性別差距最大的國家之一。' },
];

// ===== EXHIBITION DATA =====
const EXHIBITS = [
    { 
        id: 1, 
        category: '科普與經濟', 
        title: '諾貝爾獎與「母職懲罰」', 
        subtitle: 'The Motherhood Penalty', 
        desc: '2023年諾貝爾經濟學獎得主克勞迪婭·戈爾丁（Claudia Goldin），首次全面梳理了百年來女性的勞動力數據。她的研究證實，現代男女薪資差異不再只是因為教育程度，而是從「女性第一個孩子出生」那一刻起產生了難以跨越的鴻溝，這被稱為「母職懲罰」。', 
        img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80', 
        size: 'large',
        sourceName: 'The Nobel Prize 官方聲明',
        sourceUrl: 'https://www.nobelprize.org/prizes/economic-sciences/2023/press-release/'
    },
    { 
        id: 2, 
        category: '科技與醫療', 
        title: '看不見的女性與致命數據', 
        subtitle: 'The Gender Data Gap', 
        desc: '你知道汽車防撞測試的假人，長年來都是以「男性體型」為預設基準嗎？這導致女性在嚴重車禍中受重傷的機率比男性高出 47%。《看不見的女性》一書揭露了這個忽視女性身體構造的致命科學盲點。', 
        img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80', 
        size: 'small',
        sourceName: 'BBC 新聞：為何世界對女性不友善',
        sourceUrl: 'https://www.bbc.com/zhongwen/trad/world-48995325'
    },
    { 
        id: 3, 
        category: '國際新聞', 
        title: '冰島十萬婦女大罷工', 
        subtitle: 'Women\'s Day Off in Iceland', 
        desc: '2023年10月，超過十萬名冰島女性（包含冰島總理）走上街頭進行全日罷工，抗議性別薪資差距與性別暴力。這場運動讓這個連續14年蟬聯「性別平權世界第一」的模範國家，日常運作完全停擺。', 
        img: 'https://images.unsplash.com/photo-1531263060782-b024de9b9793?w=600&q=80', 
        size: 'small',
        sourceName: '中央社：冰島婦女罷工爭平權',
        sourceUrl: 'https://www.cna.com.tw/news/aopl/202310240366.aspx'
    },
    { 
        id: 4, 
        category: '台灣現況', 
        title: '多工作 54 天的「同酬日」', 
        subtitle: 'Taiwan Equal Pay Day', 
        desc: '根據台灣勞動部統計，2024年的「性別同酬日」落在2月23日。這意味著，台灣女性在2023年必須比男性「多工作 54 天」，才能達到與男性相同的全年總薪資。', 
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', 
        size: 'large',
        sourceName: '中華民國勞動部公告',
        sourceUrl: 'https://www.mol.gov.tw/1607/1632/1633/68641/post'
    },
    { 
        id: 5, 
        category: '新聞事件', 
        title: '奧運史上的第一次 50:50', 
        subtitle: 'Paris 2024 Olympics', 
        desc: '2024 巴黎奧運寫下歷史，參賽的男女運動員名額首次達到完美的 50:50 比例。相較於 1900 年巴黎奧運時，女性運動員僅佔 2.2%，這是一百多年來推動體育平權的重大里程碑。', 
        img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80', 
        size: 'small',
        sourceName: '國際奧林匹克委員會 (IOC)',
        sourceUrl: 'https://olympics.com/ioc/gender-equality'
    },
    { 
        id: 6, 
        category: '政策與社會', 
        title: '終結月經貧窮的蘇格蘭', 
        subtitle: 'Ending Period Poverty', 
        desc: '2022年，蘇格蘭正式成為全球第一個立法「免費提供生理用品」的國家。這項法案不僅打破了傳統的月經羞辱，更從制度面解決了長期被忽視的「月經稅」與經濟弱勢女性的困境。', 
        img: 'https://images.unsplash.com/photo-1584308666744-24d5e4a81d4a?w=600&q=80', 
        size: 'small',
        sourceName: 'The Guardian 報導',
        sourceUrl: 'https://www.theguardian.com/uk-news/2022/aug/15/scotland-becomes-first-nation-to-provide-free-period-products-for-all'
    },
    { 
        id: 7, 
        category: '國際新聞', 
        title: '被全面剝奪的受教權', 
        subtitle: 'Afghan Women\'s Education', 
        desc: '截至 2024 年，阿富汗是全球唯一全面禁止女性接受中學及大學教育的國家。聯合國教科文組織嚴厲譴責，這項禁令影響了超過數百萬名阿富汗女孩，讓當地的平權進展倒退回數十年前。', 
        img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', 
        size: 'large',
        sourceName: 'UNESCO 聯合國教科文組織',
        sourceUrl: 'https://www.unesco.org/en/articles/unesco-dedicates-2023-international-day-education-afghan-girls-and-women'
    },
    { 
        id: 8, 
        category: '科普與生活', 
        title: '生活中的隱形剝削：粉紅稅', 
        subtitle: 'The Pink Tax', 
        desc: '走進超市，你會發現包裝為粉紅色、標榜「女性專用」的除毛刀或沐浴乳，即使成分與男性產品完全相同，價格卻往往高出 7% 到 13%。這正是生活中無處不在的「粉紅稅」現象。', 
        img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80', 
        size: 'small',
        sourceName: '世界經濟論壇：什麼是粉紅稅',
        sourceUrl: 'https://www.weforum.org/agenda/2022/07/pink-tax-gender-pricing-inflation/'
    }
];