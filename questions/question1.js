const inquirer = require("inquirer");

module.exports = async function() {
  return await inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "What do you want to do?",
      choices: ["Encrypt a Sentence", "Decrypt a code"]
    }
  ]);
};
