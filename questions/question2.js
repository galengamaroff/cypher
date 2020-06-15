const inquirer = require("inquirer");

module.exports = async function() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "message",
      message: "Write your code here.Please use _ as a space between words."
    }
  ]);
};
