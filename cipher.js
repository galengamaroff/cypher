var inquirer = require('inquirer');
const dictionary = require('./dictionary');
const dictionaryIN = require('./dictionaryIN');
//function cipher is the start of the program and calls the other functions.
function cipher() {

    startQuestion().then(result => {

        if (result === 'End the program') {
            process.exit();
        }

        if (result === 'Decript a code') {

            decryptCode().then(result => {
                console.log('Result is', result)
                cipher();
            }, error => {
                console.error('Error', error);
                cipher();
            })

        }

        if (result === 'Cipher a Sentence') {

            cypherSentence().then(result => {
                console.log('The result is: ', result)
                cipher();
            }, error => {
                console.error('Error', error)
                cipher();
            })

        }

    }, error => {
        cipher();
    });

}
//starts asking questions
function startQuestion() {

    return new Promise((resolve, reject) => {

        inquirer
            .prompt([{
                type: 'list',
                name: 'theme',
                message: 'What do you want to do?',
                choices: [
                    'Cipher a Sentence',
                    'End the program',
                    'Decript a code'
                ]
            }])
            .then(answers => {

                if (!answers.theme) {
                    reject()
                }

                resolve(answers.theme);
            });

    })
}
//decrypts code
function decryptCode() {

    return new Promise((resolve, reject) => {

        inquirer
            .prompt([{
                type: 'input',
                name: 'message',
                message: 'Write your sentence here. Please use _ as a space between characters.Remember not to use letters here.'
            }])
            .then(answers => {

                if (!answers.message) {
                    reject('No data received');
                    return;
                }

                var decryptedMessage = '';

                for (const index in answers.message) {
                    var character = answers.message[index];
                    var replacedCharacter = dictionaryIN[character];

                    if (replacedCharacter) {
                        decryptedMessage += replacedCharacter;
                    }
                }

                resolve(decryptedMessage);
            });


    })

}
//cyphers sentences
function cypherSentence() {

    return new Promise((resolve, reject) => {

        inquirer
            .prompt([{
                type: 'input',
                name: 'message',
                message: 'Write your sentence here. Please use _ as a space between words.'
            }])

        .then(answers => {

            if (!answers.message) {
                reject('No message provided')
                return;
            }

            var encryptedMessage = '';

            for (const index in answers.message) {
                var character = answers.message[index];
                character = character.toLowerCase();
                var replacedCharacter = dictionary[character];

                if (replacedCharacter) {
                    encryptedMessage += replacedCharacter;
                }
            }

            resolve(encryptedMessage);

        });

    })


}

cipher();