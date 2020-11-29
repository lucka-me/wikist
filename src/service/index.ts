import dataProfile from '@/data/profile.json';
import dataWikis from '@/data/wikis.json';

import Profile from './profile';
import Wiki from './wiki';

type BasicCallback = () => void;

interface ServiceEvents {
    idle: BasicCallback;
}

export namespace service {

    export const profile: Profile = dataProfile;
    export const wikis: Array<Wiki> = [];

    export const events: ServiceEvents = {
        idle: () => { },
    }

    export function start() {
        wikis.length = 0;
        let count = 0;
        for (const json of dataWikis) {
            const wiki = Wiki.parse(json);
            wiki.query((succeed) => {
                if (succeed) wikis.push(wiki);
                count += 1;
                if (count === dataWikis.length) {
                    idle();
                }
            });
        }
    }

    function idle() {
        wikis.sort((a, b) => b.edits - a.edits);
        events.idle();
    }
}