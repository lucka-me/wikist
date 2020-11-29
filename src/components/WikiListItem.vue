<template>
<div class="wiki-list-item">
    <img :src="wiki.logo" alt="Logo" />
    <div>
        <h2>{{wiki.title}}</h2>
        <span>{{ wiki.user }}</span>
        <span>Since {{ wiki.since }}</span>
        <span>{{ Number(wiki.edits).toLocaleString() }} Edit{{ wiki.edits > 1 ? 's' : ''}}</span>
    </div>
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
    margin: 0;
    padding: 0.5em 1rem;
    border-top: 1px solid #C0C0C0;
    display: flex;
    flex-flow: row nowrap;
    color: #000;
    
    > img {
        margin: auto;
        padding: 3px;
    }

    > div {
        flex-grow: 1;
        margin-left: 1em;
        display: flex;
        flex-flow: column nowrap;

        > h2 {
            margin: 0.3em 0;
        }

        > span {
            margin-top: 0.2em;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }
    }
}
</style>