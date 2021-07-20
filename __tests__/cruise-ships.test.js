/* globals describe it expect */
const Ship = require('../src/cruise-ships');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const ship = new Ship();

        expect(ship).toBeInstanceOf(Ship);

    });
});

describe('startingPort', () => {
    it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    });
});

describe('setSail', () => {
    it('enables the ship to set sail from a port', () => {
 
        const ship = new Ship('Dover');

        ship.setSail();
        expect(ship.startingPort).toBeFalsy();

    });
});