// @ts-nocheck
function hiBye(params) {
    switch (params) {
        case 'hi':
            console.log(
                'npm install cc --save-dev eslint-config-prettier npm install --save-dev eslint-config-prettier npm install --save-dev eslint-config-prettier'
            );
            return 'hi';
            break;

        default:
            console.log(
                'npm install --save-dev eslint-config-prettier npm install --save-dev esli'
            );
            return 'bye';
            break;
    }
}

const value = 'hi everyone'
    .trim()
    .split('\n')[0]
    .toLowerCase();

var hello = 'world 2 3';
[1, 2, 3].forEach(addNumber);

function addNumber(number) {
    return number + 1;
}

exports.addNumber = addNumber;
exports.hiBye = hiBye;
