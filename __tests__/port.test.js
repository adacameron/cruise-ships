const Port = require('../src/port');

describe('Port constuctor class', () => {
    
    it('instantiates a new Port object', () => {
        const port = new Port('Dover');

        expect(port).toBeInstanceOf(Port);
    })
   
    it('has a name', () => {
        const port = new Port('Dover');

        expect(port.name).toBe('Dover');
    })
})