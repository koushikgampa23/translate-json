const express = require("express");
const router = express.Router();
const fs = require("fs");
var api = "AIzaSyAzYLHSGnZq5nm-hO7D8IUvT76RHwj5UDU";
var googleTranslate = require("google-translate")(api);

router.post("/", (req, res) => {
  const { fileName, language } = req.body;

  const customTranslate = (text,language) => {
    return new Promise((resolve, reject) => {
      googleTranslate.translate(text, language, function (err, translation) {
        if (err) {
          reject(err);
        } else {
          resolve(translation.translatedText);
        }
      });
    });
  };

  const fetchValues = async (obj,language) => {
    for (var key in obj) {
      if (typeof obj[key] === "object") {
        await fetchValues(obj[key],language);
      } else {
        let text = obj[key].toLowerCase();
        try {
          const response = await customTranslate(text,language);
          obj[key] = response;
        } catch (err) {
          console.error("Translation error:", err);
        }
      }
    }
    return obj;
  };

  const translateFile = require(`../uploads/${fileName}`);
  (async () => {
    try {
      const translatedObject = await fetchValues(translateFile,language);
      const fs = require("fs");
      const translatedFileName = `C:/Users/koushikg/Downloads/traslated${fileName}`;
      const jsonString = JSON.stringify(translatedObject, null, 4);
      fs.writeFileSync(translatedFileName, jsonString);
    } catch (err) {
      console.error("Translation error:", err);
    }
  })();

  res.json("Successfull");
});

module.exports = router;
