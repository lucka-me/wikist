interface Babel {
    lang: string,
    level: string
}

export default interface Profile {
    name: string,
    avatar: string,
    babels: Array<Babel>,
}