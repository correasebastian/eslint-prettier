// @ts-ignore
module.exports = {
    '*.js': [
        'eslint --fix',
        'git add',
        'jest --bail --findRelatedTests  --coverage'
    ],
    '*.ts': ['tslint --fix', 'git add']
};
