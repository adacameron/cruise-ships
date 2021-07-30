const Port = require('../src/port');

class Ship {
    constructor(itinerary) {

        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);

        // constructor defines what happens when an object is instantiated

        // access itinerary
        // set current port to the first element of the ports itinerary property (Dover)
        // previous port is null 
        // current port calls addShip() method, passing 'this' i.e. current instance of Ship. 
    };

    setSail() {
        this.currentPort.removeShip(this);

        const itinerary = this.itinerary;

        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error(`End of itinerary reached`);
        };

        this.previousPort = this.currentPort;
        this.currentPort = null;

        // remove the ship from the current port i.e. Dover
        // access itinerary
        // set previousPort from null to Dover
        // set currentPort to to null 
    };

    dock() {

        const itinerary = this.itinerary;

        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    };
    
    // access itinerary
    // access index of the previous port (Dover)
    // set current port to Calais
    // call the port.addShip()
    // i.e. calling a method on an object - 
    // method is passed into the Ship via dependency inversion
};

module.exports = Ship;