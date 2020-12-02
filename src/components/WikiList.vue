<template>
<div class="wiki-list">
    <wiki-list-item v-for="item in wikis" :wiki="item" :key="item.title" />
    <span class="loading" v-if="loading">Loading...</span>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Wiki from '@/service/wiki';

import WikiListItem from './WikiListItem.vue';

@Options({
    props: {
        loading: Boolean,
        wikis: Array,
    },
    components: {
        WikiListItem,
    }
})
export default class WikiList extends Vue {
    loading!: boolean;
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