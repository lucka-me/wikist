<template>
<div class="status">
    <img :src="profile.avatar" alt="Avatar" />
    <div>
        <h2>{{ profile.name }}</h2>
        <span v-if="wikis.length > 0">
            <span>Wiki{{ wikis.length > 1 ? 's' : '' }}</span>
            <span>{{ wikis.length }}</span>
        </span>
        <span v-if="wikis.length > 0">
            <span>Since</span>
            <span>{{ since }}</span>
        </span>
        <span v-if="wikis.length > 0">
            <span>Edits</span>
            <span>{{ Number(edits).toLocaleString() }}</span>
        </span>
        <span v-if="profile.babels && profile.babels.length > 0">
            <span>Babel{{ profile.babels.length > 1 ? 's' : '' }}</span>
            <span class="list">
                <span v-for="item of profile.babels" :key="item.lang">{{ item.lang }}-{{ item.level }}</span>
            </span>
        </span>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

import Profile from '@/service/profile';
import Wiki from '@/service/wiki';

export default class Status extends Vue {

    @Prop(Object) readonly profile!: Profile;
    @Prop(Array) readonly wikis!: Array<Wiki>;

    get since() {
        const earlist = this.wikis.reduce((time, wiki) => Math.min(time, wiki.registration), Date.now());
        return new Date(earlist).getFullYear();
    }

    get edits() {
        return this.wikis.reduce((count, wiki) => count + wiki.edits, 0);
    }
}
</script>

<style lang="scss">
$mobile-break-point: 480px;

.status {
    margin: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    @media screen and (max-width: $mobile-break-point) {
        flex-flow: column nowrap;
        align-items: stretch;
    }

    > img {
        max-width: 180px;
        max-height: 180px;
        margin: auto;
        padding: 3px;
        border-radius:50%;
        border: 1px solid #C0C0C0;
    }

    > div {
        margin: 1em 0 1em 1em;
        padding: 0.5em 0 1em 1em;
        border-left: 1px solid #C0C0C0;
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;

        @media screen and (max-width: $mobile-break-point) {
            margin: 1em 0 0;
            padding: 0.5em 0 0;
            border-left: none;
            border-top: 1px solid #C0C0C0;
        }

        > h2 {
            margin: 0.5em 0 0.2em;
        }

        > span {
            margin-top: 0.2em;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: baseline;

            > :first-child {
                text-align: start;
                font-weight: 600;
            }

            > :last-child {
                text-align: end;
            }

            > .list {
                display: flex;
                flex-flow: column nowrap;
            }
        }
    }
}
</style>