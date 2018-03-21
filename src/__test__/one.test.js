// @ts-nocheck
const { addNumber, hiBye } = require('../one');

describe('one', () => {
    test('should ', () => {
        expect(addNumber(2)).toEqual(3);
        expect(addNumber(3)).toEqual(4);
        expect(addNumber(4)).toEqual(5);
    });
});

describe('hiBye', () => {
    test('should ', () => {
        expect(hiBye('hi')).toEqual('hi');
        expect(hiBye('anything else')).toEqual('bye');
    });
});
