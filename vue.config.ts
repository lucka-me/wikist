import { ProjectOptions } from '@vue/cli-service';

const config: ProjectOptions = {
    publicPath: '/wikist/',
    chainWebpack: (config) => {
        config.resolve.extensions.add('yaml');
        config.module.rule('yaml').test(/\.ya?ml?$/)
            .use('json-loader').loader('json-loader').end()
            .use('yaml-loader').loader('yaml-loader').end();
        config.resolve.alias.set('root', __dirname);
    }
};

module.exports = config;