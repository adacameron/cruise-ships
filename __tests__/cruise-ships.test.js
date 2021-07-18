const Ship = require('../src/cruise-ships');

describe('Ship constructor', () => {
    it('creates a new instance of the ship object', () => {
        const shippy = new Ship('Shippy', 'port name');

        expect(new Ship('Shippy')).toBeInstanceOf(Object);
        expect(shippy).toEqual({ name: "Shippy", port: "port name"});
        });
    });
