// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: 'GreenRoc',
    avatar: 'https://cd.ahhf45.top/img/IMG_0555.jpeg',
    email: 'mollymathieson4@gmail.com',
    homepage: 'https://ahhf45.top/',
}

const homepageConfig = {
    title: 'GreenRoc114(@GreenRoc114)',
    subtitle: 'We Love Avicii.',
    description: '一个马上就中考的初三生，擅长Ai、Fw、Fl、Br、Ae、Pr、Id、PS等软件的安装与卸载，精通CSS、JavaScript、PHP、C、C＋＋、java、Ruby、Perl、Lisp、python、Objective-C、ActionScript等单词的拼写，熟悉windows、Linux、Mac、Android、IOS等系统的开关机',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: 'https://cd.ahhf45.top/img/IMG_0555.jpeg',
    url: 'https://ahhf45.top/',
    blogAtom: 'https://v4.ahhf45.top/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    '/api/avatar.png': { redirect: author.avatar },
    '/api/icon.png': { redirect: homepageConfig.favicon },
}

export default homepageConfig
