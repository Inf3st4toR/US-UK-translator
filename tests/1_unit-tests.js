const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {
    test('Translation 1', () => {
        const text = "Mangoes are my favorite fruit.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Mangoes are my favourite fruit.", 'Error in translation');
      });

      test('Translation 2', () => {
        const text = "I ate yogurt for breakfast.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "I ate yoghurt for breakfast.", 'Error in translation');
      });

      test('Translation 3', () => {
        const text = "We had a party at my friend's condo.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "We had a party at my friend's flat.", 'Error in translation');
      });

      test('Translation 4', () => {
        const text = "Can you toss this in the trashcan for me?";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Can you toss this in the bin for me?", 'Error in translation');
      });

      test('Translation 5', () => {
        const text = "The parking lot was full.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "The car park was full.", 'Error in translation');
      });

      test('Translation 6', () => {
        const text = "Like a high tech Rube Goldberg machine.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Like a high tech Rube Goldberg machine.", 'Error in translation');
      });

      test('Translation 7', () => {
        const text = "To play hooky means to skip class or work.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "To bunk off means to skip class or work.", 'Error in translation');
      });

      test('Translation 8', () => {
        const text = "Mr. Bond, I expect you to die.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Mr Bond, I expect you to die.", 'Error in translation');
      });
});

/*
Translate No Mr. Bond, I expect you to die. to British English
Translate Dr. Grosh will see you now. to British English
Translate Lunch is at 12:15 today. to British English
*/