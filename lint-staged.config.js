// @ts-ignore
module.exports = {
    linters: {
        '*.js': [
            'eslint --fix',
            'git add',
            'jest --bail --findRelatedTests  --coverage'
        ],
        '*.ts': ['prettier --write', 'tslint --fix', 'git add']
    },
    ignore: ['*.config.js'] //puedo ignorar los archivos de angular 1
};
