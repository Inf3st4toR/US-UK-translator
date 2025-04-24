const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    reverseTranslate(dico, word) {
        for (const [key, value] of Object.entries(dico)) {
            if (value === word) return key;
        }
        return false;
    }

    translateUSTime(time) {
        const [hours, minutes] = time.split(":").map(Number);
        if (hours > 24 || minutes > 60) return time;
        return time.replace(":", ".");
    }

    translateUKTime(time) {
        const [hours, minutes] = time.split(".").map(Number);
        if (hours > 24 || minutes > 60) return time;
        return time.replace(".", ":");
    }

    us2uk(word) {
        return (americanOnly[word] || americanToBritishSpelling[word] || americanToBritishTitles[word] || word);
    }

    uk2us(word) {
        return (britishOnly[word] || reverseTranslate(americanToBritishSpelling, word) || reverseTranslate(americanToBritishTitles, word) || word);
    }

    // consider punctuation
    textProcess(text, locale) {
        const textSplit = text.split(" ");
        const regexUS = /^\d{2}:\d{2}$/;
        const regexUK = /^\d{2}.\d{2}$/;

        //US to UK translation
        if (locale === "american-to-british") {
            const array0 = textSplit.map(word => {
                if (regexUS.test(word)) return this.translateUSTime(word);
                return this.us2uk(word);
            });
            return array0.join(" ");
        }

        //UK to US translation
        if (locale === "british-to-american") {
            const array1 = textSplit.map(word => {
                if (regexUK.test(word)) return this.translateUKTime(word);
                return this.uk2us(word);
            });
            return array0.join(" ");
        }

        else return { error: 'Invalid value for locale field' };
    }
}

module.exports = Translator;
