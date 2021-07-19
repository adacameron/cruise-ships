/* globals describe it expect */
const Ship = require('../src/cruise-ships');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const ship = new Ship();

        expect(new Ship()).toBeInstanceOf(Object);
        expect(ship).toEqual({
            startingPort: undefined
        });
    });
});

describe('startingPort', () => {
    it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    });
});
