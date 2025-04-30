const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translator = new Translator;

suite('Functional Tests', () => {
  test('Valid translation: POST to /api/translate', (done) => {
    const text = "Mangoes are my favorite fruit.";
    chai.request(server)
    .post('/api/translate')
    .send({ text: text, locale: "american-to-british" })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      assert.deepEqual(res.body.text, text);
      done();
    });
  });

  test('Translation, invalid locale field: POST to /api/translate', (done) => {
    const text = "Mangoes are my favorite fruit.";
    chai.request(server)
    .post('/api/translate')
    .send({ text: text, locale: "invalid" })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
      done();
    });
  });

  test('Translation, missing text field: POST to /api/translate', (done) => {
    chai.request(server)
    .post('/api/translate')
    .send({ locale: "american-to-british" })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, { error: 'Required field(s) missing' });
      done();
    });
  });

  test('Translation, missing locale field: POST to /api/translate', (done) => {
    const text = "Mangoes are my favorite fruit.";
    chai.request(server)
    .post('/api/translate')
    .send({ text: text })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, { error: 'Required field(s) missing' });
      done();
    });
  });

  test('Translation, empty text: POST to /api/translate', (done) => {
    const text = "";
    chai.request(server)
    .post('/api/translate')
    .send({ text: text, locale: "american-to-british" })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body, { error: 'No text to translate' });
      done();
    });
  });

  test('No translation needed: POST to /api/translate', (done) => {
    const text = "How are you?";
    chai.request(server)
    .post('/api/translate')
    .send({ text: text, locale: "american-to-british" })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.deepEqual(res.body.translation, "Everything looks good to me!");
      assert.deepEqual(res.body.text, text);
      done();
    });
  });
});
