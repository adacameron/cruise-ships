const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('itinerary', () => {
    it('determines the next port the ship docks at', () => {

        const itinerary = new Itinerary();

        expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it('has a ports property', () => {

        const dover = jest.fn()
        ;
        const calais = jest.fn()
        ;
        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
