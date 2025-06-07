<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZhiluAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.subtitle }}
            </p>
            <div>
                <ZButton icon="ph:files-duotone" to="https://v3.ahhf45.top/" primary>
                    博客v3
                </ZButton>
                <ZButton icon="ph:files-duotone" to="https://v4.ahhf45.top/" primary>
                    博客v4
                </ZButton>
                <ZButton icon="ph:github-logo-duotone" to="https://github.com/GreenRoc114">
                    GitHub
                </ZButton>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                <ZLink to="http://www.ahhf45.com">
                    安徽合肥第45中学
                </ZLink>初三学生，Windows 11 和 Arch
                Linux 用户。擅长Ai、Fw、Fl、Br、Ae、Pr、Id、PS等软件的安装与卸载，精通CSS、JavaScript、PHP、C、C＋＋、java、Ruby、Perl、Lisp、python、Objective-C、ActionScript等单词的拼写，熟悉windows、Linux、Mac、Android、IOS等系统的开关机。
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                2024年8月购买ahhf45.top域名并有了建站想法，在暑假得以实现
                2025年3月第一次使用了<Zlink to="https://https://github.com/saicaca/fuwari">
                    fuwari
                </Zlink>构建了静态博客并发表了几篇文章，后因手抖删掉了仓库并忘了备份顺势换了个主题
            </p>
        </ZField>

        <ZField label="关于主页">
            <p>
                Fork自开源项目<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">
                    L33Z22L11/homepage-v5
                </ZLink>。
                
            </p>
          
        </ZField>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}
</style>
