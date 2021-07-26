const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
    it('determines the next port the ship docks at', () => {

        const itinerary = new Itinerary();

        expect(itinerary).toBeInstanceOf(Itinerary);
    });

        it('has a ports property', () => {

            const itinerary = new Itinerary();
            
            expect(itinerary.ports).toBeUndefined()
        })
    })
