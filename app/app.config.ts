import type { Nav } from '~/types/nav'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} GreenRoc`,
        message: 'GreenRoc',
    },

    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '主页', url: '/' },
                { icon: "ph:pen-nib-duotone", text: "文章", url: "https://v4.ahhf45.top", external: true },
                // { icon: "ph:code-duotone", text: "项目", url: "/project" },
                { icon: 'ph:globe-duotone', text: '站点', url: '/site' },
                { icon: 'ph:files-duotone', text: '日志', url: '/log' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/GreenRoc114', external: true },
                { icon: 'ph:telegram-logo-duotone', text: 'Telegram', url: 'https://t.me/GreenRoc114', external: true },
            ],
        },
    ] satisfies Nav,

    themes: {
        light: {
            icon: 'ph:sun-duotone',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-duotone',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-duotone',
            tip: '深色模式',
        },
    },
})
