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
});
