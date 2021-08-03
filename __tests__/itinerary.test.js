const Itinerary = require('../src/itinerary');

let dover;
let calais;
let itinerary;

describe('itinerary', () => {
    describe('with ports', () => {
        beforeEach(() => {
            dover = jest.fn();
            calais = jest.fn();
            itinerary = new Itinerary([dover, calais]);
        });
        it('determines the next port the ship docks at', () => {

            expect(itinerary).toBeInstanceOf(Itinerary);
        });

        it('has a ports property', () => {

            expect(itinerary.ports).toEqual([dover, calais]);
        });
    });
});