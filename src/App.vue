<template>
<header><h1>Wikist</h1></header>
<div class="header-adjust"></div>
<status :profile="profile" :wikis="wikis"/>
<wiki-list :wikis="wikis" :loading="loading"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import config from '@config';
import Profile from './service/profile';
import Wiki from './service/wiki';

import Status from './components/Status.vue';
import WikiList from './components/WikiList.vue';

@Options({
    components: {
        Status,
        WikiList,
    },
})
export default class App extends Vue {

    profile: Profile = config.profile;
    wikis: Array<Wiki> = [];
    loading: boolean = true;

    mounted() {
        this.wikis.length = 0;
        let count = 0;
        for (const json of config.wikis) {
            const wiki = Wiki.parse(json);
            wiki.query((succeed) => {
                if (succeed) {
                    this.wikis.push(wiki);
                    this.wikis.sort((a, b) => b.edits - a.edits);
                }
                count += 1;
                if (count === config.wikis.length) {
                    this.loading = false;
                }
            });
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Cinzel&display=swap');

body {
    margin: 0;
}

header, h1, h2 {
    font-family: Cinzel, "宋体", serif;
}

a {
    color: inherit;
    text-decoration: inherit;

    &:hover {
        color: #0645ad;
        transition: 500ms all;
    }
}

.app {
    font-family: Josefin Slab, "宋体", serif;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;

    header {
        position: fixed;
        left: 0;
        right: 0;
        text-align: center;
        border-bottom: 1px solid #C0C0C0;
        background-color: #FFF;

        h1 {
            margin: 0.5rem 0;
            height: 2.5rem;
        }
    }

    .header-adjust {
        height: 3.5rem;
    }
}
</style>