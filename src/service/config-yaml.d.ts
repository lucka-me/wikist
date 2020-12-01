declare module 'root/config.yaml' {

    import Profile from './profile';
    import { WikiData } from './wiki';

    interface WikistConfig {
        profile: Profile;
        wikis: Array<WikiData>;
    }

    const config: WikistConfig;

    export default config;

}