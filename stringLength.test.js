const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

describe('Check string length', () => {
    const string = "helloworld";

    it('check string length must be more 0 char', () => {
    
        const testString = stringLength(string);
    
        expect(testString).toBeGreaterThanOrEqual(1);
    
    });
    
    it('check string length must be 10 chars or less', () => {
    
        const testString = stringLength(string);
    
        expect(testString).toBeLessThanOrEqual(10);
    
    });
    
    it('check string length to be 10', () => {
    
        const testString = stringLength(string);
    
        expect(testString).toBe(10);
    
    });
});


it('reverse string', () => {
    const string = "helloworld";

    const testReverseString = reverseString(string);

    expect(testReverseString).toBe('dlrowolleh');

});