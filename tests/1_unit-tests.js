const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {
    test('Translation 1', () => {
        const text = "Mangoes are my favorite fruit.";
        const translation = translator.textProcess(text, "american-to-british");
        console.log(translation);
        assert.equal(translation, "Mangoes are my favourite fruit.", 'Error in translation');
      });
});
