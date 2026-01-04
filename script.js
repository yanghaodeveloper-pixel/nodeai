const poems = [
    {
        id: 1,
        title: "静夜思",
        author: "李白",
        dynasty: "唐",
        content: "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。"
    },
    {
        id: 2,
        title: "春晓",
        author: "孟浩然",
        dynasty: "唐",
        content: "春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。"
    },
    {
        id: 3,
        title: "登鹳雀楼",
        author: "王之涣",
        dynasty: "唐",
        content: "白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。"
    },
    {
        id: 4,
        title: "望庐山瀑布",
        author: "李白",
        dynasty: "唐",
        content: "日照香炉生紫烟，\n遥看瀑布挂前川。\n飞流直下三千尺，\n疑是银河落九天。"
    },
    {
        id: 5,
        title: "赋得古原草送别",
        author: "白居易",
        dynasty: "唐",
        content: "离离原上草，\n一岁一枯荣。\n野火烧不尽，\n春风吹又生。"
    },
    {
        id: 6,
        title: "江雪",
        author: "柳宗元",
        dynasty: "唐",
        content: "千山鸟飞绝，\n万径人踪灭。\n孤舟蓑笠翁，\n独钓寒江雪。"
    },
    {
        id: 7,
        title: "相思",
        author: "王维",
        dynasty: "唐",
        content: "红豆生南国，\n春来发几枝。\n愿君多采撷，\n此物最相思。"
    },
    {
        id: 8,
        title: "绝句",
        author: "杜甫",
        dynasty: "唐",
        content: "两个黄鹂鸣翠柳，\n一行白鹭上青天。\n窗含西岭千秋雪，\n门泊东吴万里船。"
    },
    {
        id: 9,
        title: "清明",
        author: "杜牧",
        dynasty: "唐",
        content: "清明时节雨纷纷，\n路上行人欲断魂。\n借问酒家何处有？\n牧童遥指杏花村。"
    },
    {
        id: 10,
        title: "题西林壁",
        author: "苏轼",
        dynasty: "宋",
        content: "横看成岭侧成峰，\n远近高低各不同。\n不识庐山真面目，\n只缘身在此山中。"
    },
    {
        id: 11,
        title: "水调歌头·明月几时有",
        author: "苏轼",
        dynasty: "宋",
        content: "明月几时有？把酒问青天。\n不知天上宫阙，今夕是何年。\n我欲乘风归去，又恐琼楼玉宇，高处不胜寒。\n起舞弄清影，何似在人间？"
    },
    {
        id: 12,
        title: "声声慢·寻寻觅觅",
        author: "李清照",
        dynasty: "宋",
        content: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。\n乍暖还寒时候，最难将息。\n三杯两盏淡酒，怎敌他、晚来风急？\n雁过也，正伤心，却是旧时相识。"
    }
];

// DOM元素
const poemTitle = document.getElementById('poem-title');
const poemAuthor = document.getElementById('poem-author');
const poemText = document.getElementById('poem-text');
const currentDate = document.getElementById('current-date');
const nextPoemBtn = document.getElementById('next-poem');

// 获取今日日期
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    
    return `${year}年${month}月${day}日 ${weekDay}`;
}

// 根据日期获取当日诗词（确保每天相同）
function getPoemForToday() {
    const now = new Date();
    // 使用年、月、日创建一个稳定的种子
    const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const index = seed % poems.length;
    return poems[index];
}

// 显示诗词
function displayPoem(poem) {
    poemTitle.textContent = poem.title;
    poemAuthor.textContent = `${poem.dynasty}·${poem.author}`;
    poemText.innerHTML = poem.content.replace(/\n/g, '<br>');
    
    // 添加淡入动画
    poemText.style.opacity = '0';
    setTimeout(() => {
        poemText.style.transition = 'opacity 0.8s ease-in';
        poemText.style.opacity = '1';
    }, 100);
}

// 获取随机诗词
function getRandomPoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    return poems[randomIndex];
}

// 切换诗词
function switchPoem() {
    const randomPoem = getRandomPoem();
    displayPoem(randomPoem);
    
    // 按钮点击动画
    nextPoemBtn.classList.add('clicked');
    setTimeout(() => {
        nextPoemBtn.classList.remove('clicked');
    }, 300);
}

// 初始化页面
function init() {
    currentDate.textContent = getCurrentDate();
    const todayPoem = getPoemForToday();
    displayPoem(todayPoem);
    
    // 添加事件监听
    nextPoemBtn.addEventListener('click', switchPoem);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
