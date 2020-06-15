//I used converter to quickly edit the dictionary's it is not required in the code.
const dictionary = require("./dictionary");
const fs = require("fs");

module.exports = new (function () {
  const newD = {};

  for (const item in dictionary) {
    //   console.log(item);
    //   console.log(dictionary[item] + " - " + item);
    newD[dictionary[item]] = item;
  }

  console.log(newD);

  var codeStr = "module.exports = " + JSON.stringify(newD);

  fs.writeFile("./dictionaryIN.js", codeStr, (result) => {
    console.log(result);
  });
})();
