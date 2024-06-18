import './App.css';
import { useState } from 'react';
import { Button, TextField, IconButton } from "@mui/material";
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const removeInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: '-40px' }}>Balea</h1>
      <h4>Your own ToDo list</h4>
      <Paper sx={{ padding: "1rem", marginBottom: "0px", display: "flex", alignItems: "center", flexDirection: "column" }} elevation={3}>
        {inputs.map((input, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '-10px 0' }}>
            <TextField
              sx={{ margin: "20px" }}
              id={`outlined-basic-${index}`}
              label={`New Task ${index + 1}`}
              variant="outlined"
            />
            <IconButton onClick={() => removeInput(index)} sx={{ marginLeft: '-10px' }} color="error">
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button variant="contained" sx={{ bgcolor: "#003b4b", marginTop: '20px' }} onClick={addInput}>
          Add New Task
        </Button>
      </Paper>
    </div>
  );
}

export default App;
