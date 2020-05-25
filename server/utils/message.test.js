const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage function', () => {
    it('should generate correct message object', () => {
        const fromField = 'mostafa@gmail.com';
        const textField = "Hello there!!";
        let testMessageObject = generateMessage(fromField, textField);

        expect(testMessageObject.from).toBe(fromField);
        expect(testMessageObject.text).toBe(textField);
        expect(testMessageObject.created_at).toBeDefined();
        expect(typeof testMessageObject.created_at).toBe('number');

    });
});
