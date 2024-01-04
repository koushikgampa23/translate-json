var api = "AIzaSyAzYLHSGnZq5nm-hO7D8IUvT76RHwj5UDU";
var googleTranslate = require("google-translate")(api);

const customTranslate = (text, callback) => {
  googleTranslate.translate(text, "de", function (err, translation) {
    return callback(translation.translatedText);
  });
};

// customTranslate("heelo", function (res) {
//   console.log(res);
// });

const fetchValues = (obj)=> {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      fetchValues(obj[key]);
    } else {
      text = obj[key];
      customTranslate(text,function(response){
        obj[key]= response;
      })
    }
  }
  return obj;
}

const translateFile = require("./content");
const translatedObject = fetchValues(translateFile);
console.log(translatedObject);

const fs = require("fs");
const fileName = "translatedJson";
const jsonString = JSON.stringify(translatedObject, null, 2);
fs.writeFileSync(fileName, jsonString);
console.log(translateFile);
