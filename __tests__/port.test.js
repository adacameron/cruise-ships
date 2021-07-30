const Ship = require('../src/ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Port constuctor class', () => {

    it('instantiates a new Port object', () => {
        
        const port = new Port('Dover');

        expect(port).toBeInstanceOf(Port);
    });

    it('has a name', () => {
        
        const port = new Port('Dover');

        expect(port.name).toBe('Dover');
    });
});

describe('addShip', () => {
    it('adds the name of a ship when it docks at a port', () => {

        const calais = new Port('Calais');
        const ship = {};

        calais.addShip(ship);

        expect(calais.ships).toContainEqual(ship);
    });
});

describe('removeShip', () => {
    it('removes the name of a ship when it sets sail from a port', () => {

        const calais = new Port('Calais');
        const silverShadow = {}
        const vikingSky = {}

        // not testing Ship object, so use object literals 
        // check that a port can store a collection of objects - the interface of the object doesn't matter right now. 

        calais.addShip(silverShadow)
        calais.addShip(vikingSky);
        calais.removeShip(vikingSky);

        expect(calais.ships).toEqual([silverShadow]);
    });
});