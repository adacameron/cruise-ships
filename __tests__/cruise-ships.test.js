/* globals describe it expect */
const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
       
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        
        expect(ship).toBeInstanceOf(Ship);
    });
});

describe('currentPort', () => {
    it('shows which port the ship is currently at', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toEqual({name:'Dover'});
    });
});

describe('setSail', () => {
    it('enables the ship to set sail from a port', () => {
 
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        expect(ship.currentPort).toBeFalsy();

    });
});

describe('dock', () => {
    it('enables the ship to dock at a different port', () => {

        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.dock();

        expect(ship.currentPort).toBe(calais)
    });
});


