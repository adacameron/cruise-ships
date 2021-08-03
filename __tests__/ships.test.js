
const Ship = require('../src/ships');
const Itinerary = require('../src/itinerary');

let dover;
let itinerary;
let ship;
let calais;
let port;

describe('Ship constructor', () => {
    describe('with ports and an itinerary', () => {
        beforeEach(() => {
            
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            }

            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            }

            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        });

        it('creates a new instance of the ship object', () => {
            expect(ship).toBeInstanceOf(Ship);
        });

        it('gets added to port on instantiation', () => {
            expect(dover.addShip).toHaveBeenCalled()
        });

        describe('currentPort', () => {
            it('has a starting port', () => {
                expect(ship.currentPort).toBe(dover);
            });
        });

        describe('setSail', () => {
            it('sets sail from a port', () => {

                ship.setSail();

                expect(ship.currentPort).toBeFalsy();
                expect(dover.removeShip).toHaveBeenCalledWith(ship);
            });

            it('can\'t sail further than its itinerary', () => {

                ship.setSail();
                ship.dock();

                expect(() => ship.setSail()).toThrow('End of itinerary reached');
            });
        });

        describe('dock', () => {
            it('enables the ship to dock at a different port', () => {

                ship.setSail();
                ship.dock();

                expect(ship.currentPort).toBe(calais);
                expect(calais.addShip).toHaveBeenCalledWith(ship);
            });
        });
    });
});

