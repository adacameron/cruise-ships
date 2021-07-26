class Ship {
    constructor(itinerary) {
       this.currentPort = itinerary.ports[0];
       this.previousPort = null;
       this.itinerary = itinerary;
    }

    setSail() {
        this.currentPort = false;
        this.previousPort = this.currentPort;
    };

    dock() {
       console.log(this.currentPort = this.itinerary.ports[1]);
    }
};




module.exports = Ship;