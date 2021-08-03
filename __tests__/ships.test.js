
const Ship = require('../src/ships');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

let dover;
let itinerary;
let ship;
let calais;

describe('Ship constructor', () => {
   
    beforeEach(() => {
        dover = new Port('Dover');
        itinerary = new Itinerary([dover]);
        ship = new Ship(itinerary);
    });

    it('creates a new instance of the ship object', () => {

        expect(ship).toBeInstanceOf(Ship);
    });

    it('gets added to port on instantiation', () => {
        
        expect(dover.ships).toContain(ship);
    });
});

describe('currentPort', () => {
    
    it('has a starting port', () => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(dover);
    });
});

describe('setSail', () => {

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    it('sets sail from a port', () => {
       
        ship.setSail();

        expect(ship.previousPort).toBe(itinerary.ports[0]);
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });

    it('can\'t sail further than its itinerary', () => {
        
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrow('End of itinerary reached');
    });
});

describe('dock', () => {
    it('enables the ship to dock at a different port', () => {

        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });
});