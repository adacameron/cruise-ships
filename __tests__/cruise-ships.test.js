/* globals describe it expect */
const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const port = new Port('Dover');
        // port variable: port object, passing current port property as string: Dover
        const itinerary = new Itinerary([port]);
        // itinerary variable: itinerary object, passing array as ports property: port variable 
        const ship = new Ship(itinerary);
        // ship variable: ship object, passing itinerary variable: itinerary object, passing port array: port object, passing current port string: Dover

        // Port --> Itinerary --> Ship

        expect(ship).toBeInstanceOf(Ship);
    });
});

describe('currentPort', () => {
    it('has a starting port', () => {
        // need to access the current port of the ship constructor. working backwards:
        // the ship takes itinerary as an argument, so the itinerary variable is needed. 
        // Itinerary takes a port/s property, therefore we need the port variable to pass in. 
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        // itinerary expects ports, but we can still pass a single 'port', as long as it's in an array. 
        const ship = new Ship(itinerary);
 
        expect(ship.currentPort).toBe(port);
        // the current port property should be:
        // port variable: port object: currentPort property, string: Dover 
    });
});

describe('setSail', () => {
    it('enables the ship to set sail from a port', () => {

        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        // currentPort was 'Dover', but:
        // we are no longer at a port, therefore currentPort is set to null 
        // and previousPort is set to 'Dover'

        expect(ship.previousPort).toBe(itinerary.ports[0]);
        expect(ship.currentPort).toBeFalsy();

    });

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        // dover variable: port object, passing current port property as string: Dover
        const calais = new Port('Calais');
        // calais variable: port object, passing current port property as string: Calais
        const itinerary = new Itinerary([dover, calais]);
        // itinerary: itinerary object, passing ports property as array: dover, calais
        const ship = new Ship(itinerary);
        // ship: ship object: itinerary: itinerary object, passing array: dover, calais


        ship.setSail();
        // call setSail() to make sure previous port is set (Dover), and the ship knows where to dock next (Calais)
        ship.dock();
        // sets the current port to the next port in the itinerary (Calais)
    
        expect(() => ship.setSail()).toThrow('End of itinerary reached');
    });
});

describe('dock', () => {
    it('enables the ship to dock at a different port', () => {

        const dover = new Port('Dover');
        // dover variable: port object, passing current port property as string: Dover
        const calais = new Port('Calais');
        // calais variable: port object, passing current port property as string: Calais
        const itinerary = new Itinerary([dover, calais]);
        // itinerary: itinerary object, passing ports property as array: dover, calais
        const ship = new Ship(itinerary);
        // ship: ship object: itinerary: itinerary object, passing array: dover, calais
        
        ship.setSail();
        // current port (dover) becomes previous port
        // current port is now null
        // previous port is dover
        ship.dock();
        // current port becomes the next element in the Itinerary object ports property array (Calais)
        expect(ship.currentPort).toBe(calais);
    });
});



