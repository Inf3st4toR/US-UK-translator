const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('UK translation Tests', () => {
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
        assert.equal(translation, "Like a high tech Heath Robinson device.", 'Error in translation');
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

      test('Translation 9', () => {
        const text = "Dr. Grosh will see you now.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Dr Grosh will see you now.", 'Error in translation');
      });

      test('Translation 10', () => {
        const text = "Lunch is at 12:15 today.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.equal(translation, "Lunch is at 12.15 today.", 'Error in translation');
      });
});

suite('US translation Tests', () => {
  test('Translation 1', () => {
    const text = "We watched the footie match for a while.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "We watched the soccer match for a while.", 'Error in translation');
  });

  test('Translation 2', () => {
    const text = "Paracetamol takes up to an hour to work.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "Tylenol takes up to an hour to work.", 'Error in translation');
  });

  test('Translation 3', () => {
    const text = "First, caramelise the onions.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "First, caramelize the onions.", 'Error in translation');
  });

  test('Translation 4', () => {
    const text = "I spent the bank holiday at the funfair.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "I spent the public holiday at the carnival.", 'Error in translation');
  });

  test('Translation 5', () => {
    const text = "I had a bicky then went to the chippy.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "I had a cookie then went to the fish-and-chip shop.", 'Error in translation');
  });

  test('Translation 6', () => {
    const text = "I've just got bits and bobs in my bum bag.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "I've just got odds and ends in my fanny pack.", 'Error in translation');
  });

  test('Translation 7', () => {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "The swap meet at Boxted Airfield was called off.", 'Error in translation');
  });

  test('Translation 8', () => {
    const text = "Have you met Mrs Kalyani?";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "Have you met Mrs. Kalyani?", 'Error in translation');
  });

  test('Translation 9', () => {
    const text = "Prof Joyner of King's College, London.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "Prof. Joyner of King's College, London.", 'Error in translation');
  });

  test('Translation 10', () => {
    const text = "Tea time is usually around 4 or 4.30.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.equal(translation, "Tea time is usually around 4 or 4:30.", 'Error in translation');
  });
});

/*

*/
