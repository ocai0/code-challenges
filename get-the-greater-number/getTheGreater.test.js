const getTheGreater = require('./getTheGreater')

describe('getTheGreater', () => {
    it('gives the value 12 as the bigger', () => {
        expect(getTheGreater([1, 8, 10, 12, 3, 1, 9])).toBe(12)
    })
})