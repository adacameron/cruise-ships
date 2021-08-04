const Port = require('../src/port');

let calais;
let dover;
let ship;
let silverShadow;
let vikingSky;

describe('Port constuctor class', () => {
    describe('with ships', () => {
        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            ship = jest.fn();
            silverShadow = jest.fn();
            vikingSky = jest.fn();
        });


        it('instantiates a new Port object', () => {

            expect(dover).toBeInstanceOf(Port);
        });

        it('has a name', () => {

            expect(dover.name).toBe('Dover');
        });
    });

    describe('addShip', () => {
        it('adds the name of a ship when it docks at a port', () => {

            calais.addShip(ship);

            expect(calais.ships).toContainEqual(ship);
        });
    });

    describe('removeShip', () => {
        it('removes the name of a ship when it sets sail from a port', () => {

            calais = new Port('Calais');
            // removing this breaks the test and I can't figure out why!

            calais.addShip(silverShadow)
            calais.addShip(vikingSky);
            calais.removeShip(vikingSky);

            expect(calais.ships).toEqual([silverShadow]);
        });
    });
});