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

    us2ukSingle(word) {
        return (americanToBritishSpelling[word] || americanToBritishTitles[word] || word);
    }

    uk2usSingle(word) {
        return (reverseTranslate(americanToBritishSpelling, word) || reverseTranslate(americanToBritishTitles, word) || word);
    }

    textProcess(text, locale) {
        const regexUS = /^\d{2}:\d{2}$/;
        const regexUK = /^\d{2}.\d{2}$/;

        //Separate punctuation
        const spacedText = text.replace(/[,!?]|\.$/g, ' $&');
        const array0 = spacedText.split(" ");


        //US to UK translation
        if (locale === "american-to-british") {
            for (let index = 0; index < array0.length; index++) {
                for (const [key, val] of Object.entries(americanOnly)) {
                    if (key.startsWith(array0[index])){
                        const usWordArr = key.split(" ")
                        if (usWordArr.every((usWord, i) => usWord === array0[index + i])){
                            array0[index] = val;
                            if (usWordArr.length > 1) {
                                array0.splice(index+1, usWordArr.length -1);
                            }
                            break;
                            
                        }
                    }
                }
            }
            const array1 = array0.map(word => {
                if (regexUS.test(word)) return this.translateUSTime(word);
                return this.us2ukSingle(word);
            });
            return array1.join(" ").replace(/ ([.,!?])/g, '$1');
        }

        //UK to US translation
        if (locale === "british-to-american") {
            for (let index = 0; index < array0.length; index++) {
                for (const [key, val] of Object.entries(britishOnly)) {
                    if (key.startsWith(array0[index])){
                        const ukWordArr = key.split(" ")
                        if (ukWordArr.every((ukWord, i) => ukWord === array0[index + i])){
                            array0[index] = val;
                            if (ukWordArr.length > 1) {
                                array0.splice(index+1, ukWordArr.length -1);
                            }
                            break;
                            
                        }
                    }
                }
            }
            const array1 = array0.map(word => {
                if (regexUK.test(word)) return this.translateUKTime(word);
                return this.uk2usSingle(word);
            });
            return array1.join(" ").replace(/ ([.,!?])/g, '$1');
        }

        else return { error: 'Invalid value for locale field' };
    }
}

module.exports = Translator;
