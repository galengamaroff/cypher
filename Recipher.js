var inquirer = require('inquirer');
const dictionary = require('./dictionary');
const dictionaryIN = require('./dictionaryIN');

function cipher() {
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
            if (answers.theme === 'End the program') {
                process.exit();
            }

            if (answers.theme === 'Decript a code') {
                inquirer
                    .prompt([{
                        type: 'input',
                        name: 'message',
                        message: 'Write your sentence here. Please use _ as a space between characters.Remember not to use letters here.'
                    }])
                    .then(answers1 => {
                        var decryptedMessage = '';

                        for (const index in answers1.message) {
                            var character = answers1.message[index];
                            var replacedCharacter = dictionaryIN[character];

                            if (replacedCharacter) {
                                decryptedMessage += replacedCharacter;
                            }
                        }

                        console.log(decryptedMessage);
                        cipher();
                    });
            }

            if (answers.theme === 'Cipher a Sentence') {
                inquirer
                    .prompt([{
                        type: 'input',
                        name: 'message',
                        message: 'Write your sentence here. Please use _ as a space between words.'
                    }])
                    .then(answers => {
                        var encryptedMessage = '';

                        for (const index in answers.message) {
                            var character = answers.message[index];
                            character = character.toLowerCase();
                            var replacedCharacter = dictionary[character];

                            if (replacedCharacter) {
                                encryptedMessage += replacedCharacter;
                            }
                        }
                        console.log(encryptedMessage);

                        cipher();
                    });
            }
        });
}

cipher();