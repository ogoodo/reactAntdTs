const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const fs = require('fs');
const tsImportPluginFactory = require('ts-import-plugin');
const path = require('path');
const SRC_PATH = path.join(__dirname, "../");
console.log(SRC_PATH);

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    // config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    // 自定义主题
    config = rewireLess(config, env, {
        modifyVars: { "@primary-color": "#FF0000" },
    });
    // console.log(config);
    const tsload = config.module.rules[2].oneOf[2];
    // fs.writeFileSync('./temp----config.json', JSON.stringify(config));
    tsload.options = {
        getCustomTransformers: () => ({
          before: [ tsImportPluginFactory({ libraryName: "antd", style: true }) ]
        })
    };
    config.resolve.alias['@src'] = path.resolve(SRC_PATH, 'src');
    // config.resolve.plugins = [(new TsConfigPathsPlugin({
    //     configFileName: "tsconfig.json", compiler: "typescript",
    // }))]
    // fs.writeFileSync('./temp----config2.json', JSON.stringify(tsload));
    // fs.writeFileSync('./temp----config1.json', JSON.stringify(config.resolve.alias));
    return config;
};
