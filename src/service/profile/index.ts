interface Babel {
    lang: string;
    level: string | number;
}

export default interface Profile {
    name: string;
    avatar: string;
    babels?: Array<Babel>;
}