<template>
<div class="wiki-list">
    <transition-group name="wiki-list">
        <wiki-list-item v-for="item in wikis" :wiki="item" :key="item.title" />
        <span class="loading" v-if="loading">Loading...</span>
    </transition-group>
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

    > * {
        padding: 0.5em 1rem;
    }

    > .loading {
        font-size: 1.5em;
        font-weight: 600;
        text-align: center;
    }

    .wiki-list-enter-active,
    .wiki-list-leave-active {
        transition: all 0.8s ease;
    }
    .wiki-list-enter-from,
    .wiki-list-leave-to {
        opacity: 0;
        transform: translateY(-2em);
    }
    .wiki-list-move {
        transition: transform 0.8s ease;
    }

}
</style>