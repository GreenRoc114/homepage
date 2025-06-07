<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: '中考倒计时',
        nameAlt: 'CountDown',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cd.ahhf45.top' },
        ],
        desc: '马上中考了！！！上压力！！！',
    },
    {
        name: '时钟',
        nameAlt: 'Clock',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://clock.ahhf45.top' },
        ],
        desc: '用于学校内考试，可以在大屏上展示时间，后来因加入美化元素出现指针抽搐的现象，还没修，因为我懒。。。',
    },
]

const orgSites: Array<CardProps> = [
    {
        name: 'LinearTeam',
        nameAlt: 'LinearTeam',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://linearteam.top/' },
        ],
        desc: 'LinearTeam官方网站。',
    },
]
</script>

<template>
    <ZTitle>工具类站点</ZTitle>
    <ZCardList :data-list="toolSites" />
    <ZTitle>参与部分建设</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
