import config from '@config';

import Profile from './profile';
import Wiki from './wiki';

type BasicCallback = () => void;

interface ServiceEvents {
    idle: BasicCallback;
}

export namespace service {

    export const profile: Profile = config.profile;
    export const wikis: Array<Wiki> = [];

    export const events: ServiceEvents = {
        idle: () => { },
    }

    export function start() {
        wikis.length = 0;
        let count = 0;
        for (const json of config.wikis) {
            const wiki = Wiki.parse(json);
            wiki.query((succeed) => {
                if (succeed) wikis.push(wiki);
                count += 1;
                if (count === config.wikis.length) {
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