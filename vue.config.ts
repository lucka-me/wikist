import path from 'path';
import { ProjectOptions } from '@vue/cli-service';

const config: ProjectOptions = {
    publicPath: '/wikist/',
    chainWebpack: (config) => {
        config.resolve.extensions.add('yaml');
        config.module.rule('yaml').test(/\.ya?ml?$/).type('json')
            .use('yaml-loader').loader('yaml-loader').end();
        config.resolve.alias.set('@config', path.resolve(__dirname, 'config.yaml'));
    }
};

module.exports = config;