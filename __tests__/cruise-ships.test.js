/* globals describe it expect */
const Ship = require('../src/cruise-ships');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const ship = new Ship();

        expect(ship).toBeInstanceOf(Ship);
    });
});

describe('startingPort', () => {
    it('has a starting port', () => {
        const ship = new Ship(new Port('Dover'));

        expect(ship.startingPort).toEqual({name: 'Dover'});
    });
});

describe('setSail', () => {
    it('enables the ship to set sail from a port', () => {
 
        const ship = new Ship(new Port('Dover'));

        ship.setSail();
        expect(ship.startingPort).toBeFalsy();

    });
});

describe('dock', () => {
    it('enables the ship to dock', () => {

        const ship = new Ship(new Port('Dover'));

        ship.dock(new Port('Calais'));

        expect(ship.dock).toEqual({name: 'Calais'})
    });
});


