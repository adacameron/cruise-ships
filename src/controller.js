(function exportController() {

    function Controller() {
        this.initialiseSea()
    };

    Controller.prototype.initialiseSea = function initialiseSea() {
        const backgrounds = [
            './images/water0.png',
            './images/water1.png'
        ];

        let backgroundIndex = 0;

        window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
        }, 1000);
    }

    Controller.prototype.renderPorts = function (ports) {

        const portsElement = document.querySelector('#ports');

        portsElement.style.width = '0px';

        ports.forEach((port, index) => {

            const newPortDiv = document.createElement('div');
            newPortDiv.setAttribute('class', 'port');
            // newPortElement.className = 'port';

            newPortDiv.dataset.portName = port.name;
            newPortDiv.dataset.portIndex = index;

            portsElement.appendChild(newPortDiv);

            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;

            // parseInt() parses a string and returns a radix integer
            // 10 is a radix, indicating to convert from a decimal number
        });
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;

    } else {
        window.Controller = Controller;
    };
}());
