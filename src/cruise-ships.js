class Ship {
    constructor(currentPort) {
       this.currentPort = currentPort;
    }

    setSail() {
        this.currentPort = false;
    };

    dock(currentPort) {
        this.currentPort = currentPort;
    }
};




module.exports = Ship;