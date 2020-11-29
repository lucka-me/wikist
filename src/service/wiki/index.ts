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

    uid: number = 0;
    registration: number = 0;
    edits: number = 0;

    public query(callback: QueryCallback) {
        fetch(`${this.url}/api.php?action=query&meta=siteinfo&siprop=general&list=users&ususers=${this.user}&usprop=editcount|registration&format=json&origin=*`)
        .then((response) => response.json())
        .then((value) => {
            const siteValue = value.query.general;
            this.title = siteValue.sitename;
            this.base = siteValue.base;
            this.logo = siteValue.logo;

            const userValue = value.query.users[0];

            this.uid = userValue.uid;
            this.registration = Date.parse(userValue.registration);
            this.edits = userValue.editcount;
            callback(true);
        })
        .catch(() => callback(false));
    }

    static parse(json: WikiData): Wiki {
        const wiki = new Wiki;
        wiki.url = json.url;
        wiki.user = json.user;

        return wiki;
    }
}