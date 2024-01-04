const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  const data = req.body;
  //   const readFile = fs.readFileSync(data,"utf-8");
  //   console.log("body",req.body);
  //   console.log("File:",req.file.originalname);
  //   console.log("SuccessFull");
  res.json("successful");
});

module.exports = router;
