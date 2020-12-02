import fs from 'fs';
import path from 'path';
import { ProjectOptions } from '@vue/cli-service';
import YAML from 'yaml';

const configFile = fs.readFileSync('./config.yaml', 'utf-8');
const config = YAML.parse(configFile);

const options: ProjectOptions = {
    publicPath: config.project.publicPath || '/wikist/',
    chainWebpack: (config) => {
        config.resolve.extensions.add('yaml');
        config.module.rule('yaml').test(/\.ya?ml?$/).type('json')
            .use('yaml-loader').loader('yaml-loader').end();
        config.resolve.alias.set('@config', path.resolve(__dirname, 'config.yaml'));
    },
};

module.exports = options;