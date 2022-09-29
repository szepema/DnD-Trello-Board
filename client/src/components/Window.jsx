import React from "react";
import Modal from "react-modal"
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { red, green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

Modal.setAppElement("#app");

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color
}

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


const Window = ({ show, onClose, item }) => {
    return (
      <Box>
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <Grid container spacing={2}>
            <Grid item xs={12} >
                <h1>{item.title}</h1>
              </Grid> 

              <Grid item xs={4} >
                <h2>Description</h2>
              </Grid> 
              <Grid item xs={4} >
                <h2>Status</h2>
              </Grid> 
              <Grid item xs={4} >
                <h2>Assigned to</h2>
              </Grid> 

              <Grid item xs={4}>
                <p>{item.content}</p>
              </Grid> 
              <Grid item xs={4}>
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
              </Grid> 
              <Grid item xs={4}>
              <Avatar {...stringAvatar("M N")}>{item.assign}</Avatar>
              </Grid>

              <Grid item xs={4}></Grid>            
              <Grid item xs={4}>
                <ButtonGroup sx={{margin : 2}} variant="contained" aria-label="outlined primary button group">
                    <Button sx={{backgroundColor : green}}><UpdateIcon/>Update</Button>
                    <Button sx={{bgcolor: red}}><DeleteIcon/>Delete</Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={4}></Grid>
                
            </Grid>
            
          </Modal>
        </Box>
    );
};

export default Window;