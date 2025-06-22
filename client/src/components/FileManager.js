import React, { useState } from 'react';
import axios from 'axios';

function FileManager() {
  const [folderPath, setFolderPath] = useState('');
  const [prompt, setPrompt] = useState('');

  const handlePrompt = async () => {
    const [command, ...args] = prompt.trim().split(' ');

    if (command === 'create') {
      await axios.post('http://localhost:5000/file/create', {
        folderPath,
        filename: args[0],
        content: args.slice(1).join(' ')
      });
    } else if (command === 'edit') {
      await axios.post('http://localhost:5000/file/edit', {
        filePath: `${folderPath}/${args[0]}`,
        content: args.slice(1).join(' ')
      });
    } else if (command === 'delete') {
      await axios.post('http://localhost:5000/file/delete', {
        filePath: `${folderPath}/${args[0]}`
      });
    }
    alert('Operation completed');
  };

  return (
    <div style={styles.container}>
      <h2>🗂️ MCP File Manager</h2>
      <input
        type="text"
        placeholder="Enter full folder path (e.g., C:/Users/...)"
        value={folderPath}
        onChange={e => setFolderPath(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder='Enter command (e.g., "create hello.txt Hello")'
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        style={styles.input}
      />
      <button onClick={handlePrompt} style={styles.button}>Run</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

export default FileManager;
