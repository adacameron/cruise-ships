
const Ship = require('../src/ships');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {

        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Ship);
    });


    it('gets added to port on instantiation', () => {

        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);

        // Port --> Itinerary --> Ship
        // this instance of Port is made available to the Ship instance 
        // therefore Port has its addShip() method called
        // and port.ships contains the Ship instance

        expect(dover.ships).toContain(ship);
    });
});

describe('currentPort', () => {
    it('has a starting port', () => {

        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('sets sail from a port', () => {

        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.previousPort).toBe(itinerary.ports[0]);
        expect(ship.currentPort).toBeFalsy();

        expect(dover.ships).not.toContain(ship);

        // ship.setSail() should call the currentPort's removeShip() method

    });

    it('can\'t sail further than its itinerary', () => {

        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrow('End of itinerary reached');
    });
});

describe('dock', () => {
    it('enables the ship to dock at a different port', () => {

        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);

        // ports can store ships
        // to store the ships, the dock() method calls the destination port's addShip() method
        // i.e. ship.dock() calls calais.addShip() 

        // ship.setSail() 
        //      sets ship.currentPort is null 
        //      sets ship.previousPort is Dover
        //      next port in Itinerary is Calais

        // ship.dock()
        //      sets ship.currentPort to Calais
        //      calls port.addShip() 
    });
});