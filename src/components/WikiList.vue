<template>
<div class="wiki-list">
    <span class="loading" v-if="wikis.length < 1">Loading...</span>
    <wiki-list-item v-for="item in wikis" :wiki="item" :key="item.title" />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Wiki from '@/service/wiki';

import WikiListItem from './WikiListItem.vue';

@Options({
    props: {
        wikis: Array,
    },
    components: {
        WikiListItem,
    }
})
export default class WikiList extends Vue {
    wikis!: Array<Wiki>;
}
</script>

<style lang="scss" scoped>
.wiki-list {
    display: flex;
    flex-flow: column nowrap;

    > .loading {
        font-size: 2em;
        font-weight: 600;
        text-align: center;
    }
}
</style>