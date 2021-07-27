class Ship {
        // a Ship constructor
    constructor(itinerary) {
        // passing itinerary
        this.currentPort = itinerary.ports[0];
        // the current port is set to index 0, or first element of the itinerary ports property (Dover)
        console.log('We start from the currentPort, which is Dover')
        
        this.previousPort = null;
        // previous port is set to null (no object, falsy)
        console.log('there is no previous port, so this is null')

        this.itinerary = itinerary;
    };

    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error(`End of itinerary reached`);
        };

        this.previousPort = this.currentPort;
        // sets the previous port to the current port 
        // e.g. from null (in the constructor), to Dover (set to itinerary.ports[0] in the constructor)
        console.log('We have set sail, so the previous port is now Dover (was null)')

        
        this.currentPort = null;
        // so, the previous port becomes Dover
        // and the current port becomes null 
        console.log('We have set sail, and we are no longer at a port, so the current port changes from Dover to null');
    };

    dock() {
        const itinerary = this.itinerary;
        // itinerary variable to access the Itinerary object properties
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort)
        // variable to access the index of the ports property of the Itinerary object
        // passing the previous port as an argument (Dover)

        this.currentPort = itinerary.ports[previousPortIndex + 1];
        // accesses the index of the Itinerary ports property
        // sets current port to the next element in the ports property array (Calais), following on from the previous port (Dover)
        console.log('We are docking at the next port in the itinerary, which is Calais')
    };
};

module.exports = Ship;