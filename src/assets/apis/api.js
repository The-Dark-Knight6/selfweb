let server = '../../../static/json/';
//说明 之前的mp3是存储在vue的静态（static/sound）文件夹里，后面架构了express后就存在它的静态文件里面了
let newset = 'http://129.204.61.122:8088/'
//let newset = 'http://localhost:3000/' //本地测试本地express项目开发

let api = {
    m_index:server + 'first.json',
    m_ad:server + 'm_ads.json',
    the_link:server + 'links.json',
    m_text:server + 'shortword.json',
    the_music:server + 'mus.json',
    qing:newset + 'images/qingtian.mp3',
    yi:newset + 'images/yiluxaingbei.mp3',
    shuo:newset + 'images/shuolezaijian.mp3',
    yequ:newset + 'images/yequ.mp3',
    songs:server + 'jay_song.json',
    m_router:server + 'm_router.json',
    p_router:server + 'p_router.json',
    thespray:server + 'thespray.json',
    addcommond:newset + 'addcommond',
    commonds:newset + 'commonds',
    jay:newset + 'jay',
    addjay:newset + 'addjay',
    deljay:newset + 'deljay',
    bear:newset + 'images/bear.gif',
    goodstu:newset + 'images/goodstu.gif',
    myqq:newset + 'images/myqq.png',
    houlang:newset + 'images/houlang.png',
    lizhi:newset + 'images/lizhi.png',
    luoji:newset + 'images/luoji.jpg',
    selfnum:newset + 'images/selfnum.jpg',
    xiyang:newset + 'images/xiyang.jpg',
    bj:newset + 'images/bj.jpg',
    books:newset + 'images/books.jpg',
    code:newset + 'images/code.jpg',
    getb:newset + 'images/getb.jpg',
    icanbb:newset + 'images/icanbb.jpg',
    jaypic:newset + 'images/jaypic.jpg',
    whadsfci:newset + 'images/whadsfci.gif',
}

export default api;