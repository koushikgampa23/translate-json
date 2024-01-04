// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const uploadFileRoute = require("./routes/uploadFile");
// app.use("/fileupload", uploadFileRoute);

// const convertFile = require("./routes/translate");
// app.use("/translatefile", convertFile);

// app.listen(3001, () => {
//   console.log("3001 is running");
// });

const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);
console.log("Sync");
console.log("1");
const file = fs.readFileSync("traslatedFile.json", "utf-8");
console.log(file);
console.log("2");

console.log();
console.log("async");
console.log("3");
fs.readFile("traslatedFile.json", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});
console.log("4");
