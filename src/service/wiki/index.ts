type QueryCallback = (succeed: boolean) => void;

interface WikiData {
    url: string;
    user: string;
}

export default class Wiki {

    url: string = '';
    user: string = '';

    title: string = '';
    base: string = '';
    logo: string = '';
    server: string = '';
    articlePath: string = '';

    uid: number = 0;
    registration: number = 0;
    edits: number = 0;
    lastEdit: number = 0;

    query(callback: QueryCallback) {
        const query = `${this.url}/api.php?action=query`
            + '&meta=siteinfo&siprop=general'
            + '&list=users|usercontribs'
            + `&ususers=${this.user}&usprop=editcount|registration`
            + `&ucuser=${this.user}&uclimit=1&ucprop=timestamp`
            + '&format=json&origin=*';
        fetch(query)
        .then((response) => response.json())
        .then((value) => {
            const siteValue = value.query.general;
            this.title = siteValue.sitename;
            this.base = siteValue.base;
            this.logo = siteValue.logo;
            this.server = siteValue.server;
            if (this.server.match(/^\/\//)) {
                this.server = `https:${this.server}`;
            }
            this.articlePath = `${this.server}${siteValue.articlepath}`;

            const userValue = value.query.users[0];

            this.uid = userValue.userid;
            this.registration = Date.parse(userValue.registration);
            this.edits = userValue.editcount;

            if (value.query.usercontribs.length > 0) {
                const lastContribValue = value.query.usercontribs[0];
                this.lastEdit = Date.parse(lastContribValue.timestamp);
            }

            
            callback(true);
        })
        .catch(() => callback(false));
    }

    get lastEditDate() {
        return new Date(this.lastEdit).toLocaleDateString();
    }

    get since() {
        return new Date(this.registration).toLocaleDateString();
    }

    get userPage() {
        return this.articlePath.replace('$1', `User:${this.user}`);
    }

    static parse(json: WikiData): Wiki {
        const wiki = new Wiki;
        wiki.url = json.url;
        wiki.user = json.user;

        return wiki;
    }
}