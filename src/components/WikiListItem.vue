<template>
<div class="wiki-list-item">
    <h2>{{wiki.title}}</h2>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Wiki from '@/service/wiki';

@Options({
    props: {
        wiki: Wiki,
    }
})
export default class WikiListItem extends Vue {}
</script>

<style lang="scss" scoped>
.wiki-list-item {
    margin: 0 2em;
    color: #000;

    h2 {
        font-family: Cinzel, "宋体", serif;
    }
}
</style>