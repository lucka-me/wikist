<template>
<div class="wiki-list-item">
    <img :src="wiki.logo" alt="Logo" />
    <div>
        <h2><a :href="wiki.base" title="Homepage" target="_blank" rel="noopener">{{wiki.title}}</a></h2>
        <span class="tags" v-if="wiki.tags.length > 0">
            <span v-for="tag of wiki.tags" :key="tag">#{{tag}}</span>
        </span>
        <span>
            <a :href="wiki.userPage" title="User Page" target="_blank" rel="noopener">{{ wiki.user }}</a>
            <span>#{{ wiki.uid }}</span></span>
        <span>
            <span>Since</span>
            <span>{{ wiki.since }}</span></span>
        <span>
            <span>Edit{{ wiki.edits > 1 ? 's' : ''}}</span>
            <span>{{ Number(wiki.edits).toLocaleString() }}</span>
        </span>
        <span v-if="wiki.lastEdit > 0">
            <span>Last Edit</span>
            <span>{{ wiki.lastEditDate }}</span>
        </span>
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
        width: 135px;
        min-width: 135px;
        max-width: 135px;
        text-align: center;
    }

    > div {
        flex-grow: 1;
        margin-left: 1em;
        display: flex;
        flex-flow: column nowrap;

        > h2 {
            margin: 0.3em 0 0.15em;
        }

        > span {
            margin-top: 0.2em;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        .tags {
            justify-content: flex-start;

            > span {
                margin-inline-end: 0.2em;

                &:hover {
                    color: #0645ad;
                    transition: 500ms all;
                }
            }
        }
    }
}
</style>