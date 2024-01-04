import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [uploadFile, setUploadFile] = React.useState<any>();
  const [fileName, setFileName] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const data = new FormData();
      data.append("file", file);
      setUploadFile(data);
    }
  };

  const handleUpload = () => {
    axios.post("http://localhost:3001/fileupload", uploadFile).then((res) => {
      console.log(res);
    });
  };

  const handleConvert = () => {
    axios
      .post("http://localhost:3001/translatefile", {
        fileName: fileName,
        language: language,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="App">
      {/* <form action="#"> */}
      <h1>File Upload</h1>
      <input type="file" onChange={handleFile} />
      <br />
      <button onClick={handleUpload}>Upload File</button>
      <h3>List of Avaliable languages</h3>
      <li>Afrikaans - af</li>

      <li>Albanian - sq</li>
      <li>Amharic - am</li>
      <li>Arabic - ar</li>
      <p>
        For more details visit :{" "}
        <a href="https://cloud.google.com/translate/docs/languages">
          Visit more languages
        </a>
      </p>
      <input type="text" onChange={(e) => setLanguage(e.target.value)} />

      <button onClick={handleConvert}>Translate</button>
      {/* {uploadFile} */}
      {/* </form> */}
    </div>
  );
}

export default App;
