// ===== FLIP CARDS DATA =====
const FLIP_CARDS = [
    { tag: 'Did you know?', title: '教育差距', color: 'var(--muted-sage)', back: '全球有 1.29 億女童未能就學，佔失學兒童的 53%。受教育的機會仍是許多地區女性面臨的最大障礙之一。' },
    { tag: 'Global Fact', title: '薪資不平等', color: 'var(--dusty-amethyst)', back: '全球女性平均薪資比男性低 20%。在相同職位與資歷下，這個差距依然存在——被稱為「無法解釋的薪酬差距」。' },
    { tag: 'Think About It', title: '家務分配', color: '#B8A99A', back: '女性每天花在無酬家務與照護工作上的時間，平均是男性的 3 倍。這些工作支撐了整個社會的運作，卻鮮少被計入 GDP。' },
    { tag: 'Leadership', title: '政治參與', color: 'var(--muted-sage)', back: '截至 2023 年，全球國會席次中女性僅佔 26.5%。儘管有所進步，要達到真正的代表性仍需數十年。' },
    { tag: 'Did you know?', title: '科技性別鴻溝', color: 'var(--dusty-amethyst)', back: '全球科技產業女性員工佔比不足 28%，在 AI 研究領域更僅有 22%。這意味著設計未來的力量仍由少數人主導。' },
    { tag: 'Social Reality', title: '暴力問題', color: '#B8A99A', back: '全球每 3 位女性中，就有 1 位在一生中曾遭受身體或性暴力。這是世界上最普遍的人權侵犯之一。' },
    { tag: 'Progress', title: '法律保障', color: 'var(--muted-sage)', back: '1995 年以來，已有超過 100 個國家修訂了涉及性別平等的法律。但法律的存在與實際執行之間，依然存在巨大鴻溝。' },
    { tag: 'Health', title: '生育健康', color: 'var(--dusty-amethyst)', back: '每天有 800 位女性死於可預防的孕產原因。在低收入國家，缺乏醫療資源讓生育成為女性最危險的時刻。' },
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
    { id: 1, category: '職場', title: '玻璃天花板', subtitle: 'The Glass Ceiling', desc: '在 Fortune 500 企業中，女性 CEO 的比例首次在 2023 年突破 10%。這個數字雖是歷史新高，卻也揭示了職場頂層的性別鴻溝仍有多深。', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', size: 'large' },
    { id: 2, category: '教育', title: '求知的權利', subtitle: 'Right to Learn', desc: '教育是改變命運最有力的工具。當女孩能夠受教育，社區的健康、經濟和社會指標都會隨之提升。', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', size: 'small' },
    { id: 3, category: '社會文化', title: '共同承擔', subtitle: 'Shared Responsibility', desc: '父親參與育兒，不只是家庭的選擇，更是打破性別刻板印象的社會行動。研究顯示，主動育兒的父親能養育出更具性別平等觀念的孩子。', img: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&q=80', size: 'small' },
    { id: 4, category: '職場', title: '科技的臉孔', subtitle: 'Faces of Tech', desc: 'AI 與科技工具的設計，反映了設計者的偏見。當科技業的性別多元度提升，我們才能打造更公平的未來。', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', size: 'large' },
    { id: 5, category: '社會文化', title: '街頭空間', subtitle: 'Street & Space', desc: '城市的設計常以男性的移動模式為預設。讓城市對所有性別都安全，是性別平等在日常空間中的具體實踐。', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', size: 'small' },
    { id: 6, category: '教育', title: 'STEM 的未來', subtitle: 'Future of STEM', desc: '鼓勵女性進入 STEM 領域，不僅是公平問題，更是全球科技進步的關鍵。多元的團隊能提出更好的解決方案。', img: 'https://images.unsplash.com/photo-1532094349884-543559b61c5c?w=600&q=80', size: 'small' },
    { id: 7, category: '職場', title: '無酬勞動', subtitle: 'Unpaid Labor', desc: '全球女性每天平均花費 4.4 小時從事無酬照護工作，是男性的兩倍。這些工作支撐著整個社會，卻幾乎隱形。', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', size: 'large' },
    { id: 8, category: '社會文化', title: '語言的力量', subtitle: 'Power of Language', desc: '語言塑造我們對性別的認知。從代詞的多元化到職業名稱的去性別化，語言的改變是意識改變的起點。', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80', size: 'small' },
];
