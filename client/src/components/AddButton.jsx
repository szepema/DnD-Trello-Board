import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, green } from '@mui/material/colors';
import { spacing } from '@mui/system';

export default function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState('');

  const handleChange = (event, SelectChangeEvent) => {
    setStatus(event.target.value , string);
  };

  return (
    <div >
      <Button variant="contained" onClick={handleOpen} className='add-btn'>Add New Item<AddIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box className='add-modal'>
            <div>
                <h1>Create New Item</h1>
                <h4>Title</h4>
                <TextField id="standard-basic" label="Standard" variant="standard" size="small"/>
                <h4>Description</h4>
                <TextField id="standard-basic" label="Standard" variant="standard" size="small"/>
                <h4>Status</h4>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ticket Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={handleChange}
                        >
                            <MenuItem>⭕️ Open</MenuItem>
                            <MenuItem>🔆️ In Progress</MenuItem>
                            <MenuItem>📝 In Review</MenuItem>
                            <MenuItem>✅ Done</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <h4>Assign to</h4>
                <Stack direction="row" spacing={2}>
                    <Avatar>PR</Avatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>LT</Avatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>DM</Avatar>
                </Stack>
                <div>
                    <Button sx={{margin : 2, color : green, width : '85%'}} classname="add-btn" variant="contained">Add New Item</Button>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}