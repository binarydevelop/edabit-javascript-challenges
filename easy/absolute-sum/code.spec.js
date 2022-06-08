const {getAbsSum, getAbsSum2}  = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getAbsSum([2, -1, -3, 4, 8])).toEqual(10);
        expect(getAbsSum([-1])).toEqual(-1);
        expect(getAbsSum([-1, -3, -5, -4, -10, 0])).toEqual(-23);
        expect(getAbsSum([8, 9, 10, 32, 101, -10])).toEqual(150);
        expect(getAbsSum([500])).toEqual(500);
    });
});

describe('Tests', () => {
    test('the tests', () => {
        expect(getAbsSum2([2, -1, -3, 4, 8])).toEqual(10);
        expect(getAbsSum2([-1])).toEqual(-1);
        expect(getAbsSum2([-1, -3, -5, -4, -10, 0])).toEqual(-23);
        expect(getAbsSum2([8, 9, 10, 32, 101, -10])).toEqual(150);
        expect(getAbsSum2([500])).toEqual(500);
    });
});