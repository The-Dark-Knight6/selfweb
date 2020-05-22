let server = '../../../static/json/';
//说明 之前的mp3是存储在vue的静态（static/sound）文件夹里，后面架构了express后就存在它的静态文件里面了
// let music = '../../../static/sound/'; 
let newset = '/apis/'

let api = {
    m_index:server + 'first.json',
    m_ad:server + 'm_ads.json',
    the_link:server + 'links.json',
    m_text:server + 'shortword.json',
    the_music:server + 'mus.json',
    qing:newset + 'images/晴天.mp3',
    yi:newset + 'images/一路向北.mp3',
    shuo:newset + 'images/说了再见.mp3',
    shen:newset + 'images/绅士.mp3',
    songs:server + 'jay_song.json',
    m_router:server + 'm_router.json',
    p_router:server + 'p_router.json',
    thespray:server + 'thespray.json',
    mysql:newset + 'mysql',
    jay:newset + 'jay',
    addjay:newset + 'addjay'
}

export default api;