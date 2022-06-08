const isLegitimate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0]])).toEqual(false);
        expect(isLegitimate([[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0, 0, 0], [0, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]])).toEqual(false);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1]])).toEqual(false);
        expect(isLegitimate([[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1], [0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0]])).toEqual(false);
        expect(isLegitimate([[0, 0, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0]])).toEqual(true);
        expect(isLegitimate([[0, 0, 0], [0, 1, 0], [0, 1, 0], [0, 1, 1], [0, 1, 0], [0, 0, 0]])).toEqual(false);
        expect(isLegitimate([[0, 0, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1], [0, 1, 0], [0, 0, 0]])).toEqual(false);
    });
});
