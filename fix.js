const replaceSVG = text=>{
    text = text.replace(/ transform="matrix\(1 0 0 1 (\d+) (\d+)\)" class=".+"/,' x="$1" y="$2"')
    return text;
};


let fontAPI = `https://lab.magiconch.com/api/fontmin`;
const getFontFromText = (name,text,onOver=_=>{})=>{

    text += '0';
    text = text.replace(/\s/g,'');
    text = Array.from(new Set(text)).sort().join('');

    if(!text) return requestAnimationFrame(onOver);

    const unicode = str2utf8(text).join();
    const fontURL = `${fontAPI}?name=${name}&unicode=${unicode}&type=woff`;

    loadFont(name,fontURL,_=>{
        onOver(_)
        // style.innerHTML = `html {font-family: a123;}`;
    })
}


const loadFont = async (fontName,fontURL,callback) => {
	const fontFace = new FontFace(fontName, `url(${fontURL})`);
	fontFace.load().then(fontFace => {
		document.fonts.add(fontFace);
		callback(fontFace);
	}).catch(e=>{
        // console.log(e);
        callback();
    })
};
function str2utf8(str) {
    return str.split('').map(s=>s.charCodeAt(0))
}
function utf82str(str) {
    return String.fromCharCode.apply(null,Array.from(str))
}


getFontFromText(`JiaLiDaYuanJF`,`1234567890吃货制霸
烤全羊
锅包肉
冷面
小鸡炖蘑菇
烤鸭
煎饼果子
驴肉火烧
山
东
烩面
热干面
湖
南
江
苏
生煎包
浙
江
福
建
台
湾
清补凉
肠粉
江
西
安
徽
山
西
陕
西
宁
夏
甘
肃
青稞
毛血旺
过桥米线
螺蛳粉
肠旺面
火锅
酥油茶
短居
羊肉串
ThusLab试验场
分数: 53
超爱５
一周
住宿
游玩４
吃过３
换乘２
害怕１
吃过
没听说
鸡蛋仔蛋挞
labGitHub保存成图片
手机端可长按图片 “添加到照片”

关闭`+document.body.innerHTML);