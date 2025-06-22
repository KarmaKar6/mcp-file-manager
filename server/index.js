const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/upload-folder', upload.single('folder'), (req, res) => {
  res.json({ message: 'Folder uploaded (simulated)', file: req.file });
});

app.post('/file/create', (req, res) => {
  const { folderPath, filename, content } = req.body;
  const filePath = path.join(folderPath, filename);
  fs.writeFileSync(filePath, content);
  res.json({ message: 'File created', filePath });
});

app.post('/file/edit', (req, res) => {
  const { filePath, content } = req.body;
  fs.writeFileSync(filePath, content);
  res.json({ message: 'File edited', filePath });
});

app.post('/file/delete', (req, res) => {
  const { filePath } = req.body;
  fs.unlinkSync(filePath);
  res.json({ message: 'File deleted', filePath });
});

app.listen(5000, () => console.log('Server running on port 5000'));
