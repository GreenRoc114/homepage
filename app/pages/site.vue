<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: '中考倒计时',
        nameAlt: 'CountDown',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cooo.site' },
        ],
        desc: '马上中考了！！！',
    },
    {
        name: '时钟',
        nameAlt: 'Clock',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://exam.thisis.host' },
        ],
        desc: '用于学校内考试，可以在大屏上展示时间，后来因加入美化元素出现指针抽搐的现象，还没修，因为我懒。。。',
    },
]

const orgSites: Array<CardProps> = [
    {
        name: '相侵相碍异家人',
        nameAlt: 'Alien Family Hub',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://alienfamily.us.kg/' },
        ],
        desc: 'Hexo博客交流群“糖果屋”的群友组织的Minecraft服务器，于2024年7月18日建群。2025年2月2日创建了成员列表页面。',
    },
]
</script>

<template>
    <ZTitle>工具类站点</ZTitle>
    <ZCardList :data-list="toolSites" />
    <ZTitle>组织门户</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
