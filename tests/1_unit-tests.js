const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('UK translation Tests', () => {
      test('Translation 1', () => {
        const text = "Mangoes are my favorite fruit.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "favourite", 'Error in translation');
      });

      test('Translation 2', () => {
        const text = "I ate yogurt for breakfast.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "yoghurt", 'Error in translation');
      });

      test('Translation 3', () => {
        const text = "We had a party at my friend's condo.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "flat", 'Error in translation');
      });

      test('Translation 4', () => {
        const text = "Can you toss this in the trashcan for me?";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "bin", 'Error in translation');
      });

      test('Translation 5', () => {
        const text = "The parking lot was full.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "car park", 'Error in translation');
      });

      test('Translation 6', () => {
        const text = "Like a high tech Rube Goldberg machine.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "Heath Robinson device", 'Error in translation');
      });

      test('Translation 7', () => {
        const text = "To play hooky means to skip class or work.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "bunk off", 'Error in translation');
      });

      test('Translation 8', () => {
        const text = "Mr. Bond, I expect you to die.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.notInclude(translation, "Mr.", 'Error in translation');
      });

      test('Translation 9', () => {
        const text = "Dr. Grosh will see you now.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.notInclude(translation, "Dr.", 'Error in translation');
      });

      test('Translation 10', () => {
        const text = "Lunch is at 12:15 today.";
        const translation = translator.textProcess(text, "american-to-british");
        assert.include(translation, "12.15", 'Error in translation');
      });
});

suite('US translation Tests', () => {
  test('Translation 1', () => {
    const text = "We watched the footie match for a while.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "soccer", 'Error in translation');
  });

  test('Translation 2', () => {
    const text = "Paracetamol takes up to an hour to work.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "Tylenol", 'Error in translation');
  });

  test('Translation 3', () => {
    const text = "First, caramelise the onions.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "caramelize", 'Error in translation');
  });

  test('Translation 4', () => {
    const text = "I spent the bank holiday at the funfair.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "public", 'Error in translation');
    assert.include(translation, "carnival", 'Error in translation');
  });

  test('Translation 5', () => {
    const text = "I had a bicky then went to the chippy.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "cookie", 'Error in translation');
    assert.include(translation, "fish-and-chip shop", 'Error in translation');
  });

  test('Translation 6', () => {
    const text = "I've just got bits and bobs in my bum bag.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "odds and ends", 'Error in translation');
    assert.include(translation, "fanny pack", 'Error in translation');
  });

  test('Translation 7', () => {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "swap meet", 'Error in translation');
  });

  test('Translation 8', () => {
    const text = "Have you met Mrs Kalyani?";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "Mrs.", 'Error in translation');
  });

  test('Translation 9', () => {
    const text = "Prof Joyner of King's College, London.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "Prof.", 'Error in translation');
  });

  test('Translation 10', () => {
    const text = "Tea time is usually around 4 or 4.30.";
    const translation = translator.textProcess(text, "british-to-american");
    assert.include(translation, "4:30", 'Error in translation');
  });
});

suite('Highlight translation Tests', () => {
  test('Highlight 1', () => {
    const text = "Mangoes are my favorite fruit.";
    const translation = translator.textProcess(text, "american-to-british");
    assert.include(translation, '<span class="highlight">favourite</span>', 'Error in translation');
  });

});

/*

*/
