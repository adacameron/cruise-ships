class Ship {
    constructor(startingPort) {
       this.startingPort = startingPort;
    }

    setSail() {
        this.startingPort = false;
    };

    dock(portName) {
        console.log(this.dock = portName);
    }
};




module.exports = Ship;