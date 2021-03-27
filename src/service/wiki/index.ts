const Constants = {
    TIME_ACTIVE: 30 * 24 * 3600 * 1000,
    REGEXP_URL: /^https?:\/\//i
}

export interface WikiData {
    url: string;
    user: string;

    title?: string;
    base?: string;
    logo?: string;
    server?: string;
    articlePath?: string;

    uid?: number;
    registration?: number;

    edits?: number;
    lastEdit?: number;

    tags?: Array<string>;

    forceUpdate?: boolean;
}

export default class Wiki implements WikiData {

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

    tags: Array<string> = [];

    forceRefresh: boolean = false;

     async query(): Promise<boolean> {

        const hasSiteInfo = this.title.length > 0
            && Constants.REGEXP_URL.test(this.base)
            && Constants.REGEXP_URL.test(this.logo)
            && Constants.REGEXP_URL.test(this.server)
            && this.articlePath.length > 0;
        const hasUserInfo = this.uid > 0 && this.registration > 0;

        if (hasSiteInfo && hasUserInfo && !this.forceRefresh) {
            return true;
        }

        const refreshUserInfo = !hasUserInfo || this.forceRefresh;

        const query = `${this.url}/api.php?action=query`
            + (hasSiteInfo ? '' : '&meta=siteinfo&siprop=general')
            + (refreshUserInfo ? '&list=users|usercontribs' : '')
            + (refreshUserInfo ? `&ususers=${this.user}&usprop=editcount` : '')
                + (hasUserInfo ? '' : '|registration')
            + (refreshUserInfo ? `&ucuser=${this.user}&uclimit=1&ucprop=timestamp` : '')
            + '&format=json&origin=*';

        let json: any;
        try {
            const response = await fetch(query)
            json = await response.json();
        } catch {
            // Still succeed if has all info but query fails
            return hasSiteInfo && hasUserInfo;
        }
        

        if (!hasSiteInfo) {
            const siteValue = json.query.general;
            if (!this.title) this.title = siteValue.sitename;
            if (!this.base) this.base = siteValue.base;
            if (!this.logo) this.logo = siteValue.logo;
            if (!this.server) this.server = siteValue.server;
            if (/^\/\//.test(this.server)) {
                this.server = `https:${this.server}`;
            }
            if (!this.articlePath) this.articlePath = siteValue.articlepath;
        }

        if (refreshUserInfo) {
            const userValue = json.query.users[0];

            if (!hasUserInfo) {
                if (!this.uid) this.uid = userValue.userid;
                if (!this.registration) this.registration = Date.parse(userValue.registration);
            }

            this.edits = userValue.editcount;

            if (json.query.usercontribs.length > 0) {
                const lastContribValue = json.query.usercontribs[0];
                this.lastEdit = Date.parse(lastContribValue.timestamp);
            }
        }

        if (Date.now() - this.lastEdit < Constants.TIME_ACTIVE) {
            this.tags.unshift('active');
        }
        return true;
    }

    get lastEditDate() {
        return new Date(this.lastEdit).toLocaleDateString();
    }

    get since() {
        return new Date(this.registration).toLocaleDateString();
    }

    get userPage() {
        return this.getArticlePath(`User:${this.user}`);
    }

    getArticlePath(title: string) {
        return `${this.server}${this.articlePath.replace('$1', title)}`;
    }

    static parse(json: WikiData): Wiki {
        const wiki = new Wiki;
        wiki.url = json.url;
        wiki.user = json.user;

        if (json.title) wiki.title = json.title;
        if (json.base) wiki.base = json.base;
        if (json.logo) wiki.logo = json.logo;
        if (json.server) wiki.server = json.server;
        if (json.articlePath) wiki.articlePath = json.articlePath;

        if (json.uid) wiki.uid = json.uid;
        if (json.registration) wiki.registration = json.registration;
        if (json.edits) wiki.edits = json.edits;
        if (json.lastEdit) wiki.lastEdit = json.lastEdit;

        if (json.tags) wiki.tags = json.tags;

        if (json.forceUpdate) wiki.forceRefresh = json.forceUpdate;

        return wiki;
    }
}