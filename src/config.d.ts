declare module '@config' {

    import Profile from '@/service/profile';
    import { WikiData } from '@/service/wiki';

    interface WikistConfig {
        profile: Profile;
        wikis: Array<WikiData>;
    }

    const config: WikistConfig;

    export default config;

}