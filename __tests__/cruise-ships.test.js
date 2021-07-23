/* globals describe it expect */
const Ship = require('../src/cruise-ships');
const Port = require('../src/port');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const ship = new Ship();

        expect(ship).toBeInstanceOf(Ship);
    });
});


describe('currentPort', () => {
    it('shows which port the ship is currently at', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port);
    });
});

describe('setSail', () => {
    it('enables the ship to set sail from a port', () => {
 
        const port =  new Port('Dover')
        const ship = new Ship(port);


        ship.setSail();
        expect(ship.currentPort).toBeFalsy();

    });
});

// describe('dock', () => {
//     it('enables the ship to dock at a different port', () => {

//         const ship = new Ship(new Port('Dover'));

//         ship.dock(new Port('Calais'));

//         expect(ship.dock).toEqual({name: 'Calais'})
//     });
// });

describe('dock', () => {
    it('enables the ship to dock at a different port', () => {

        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais)
    });
});


