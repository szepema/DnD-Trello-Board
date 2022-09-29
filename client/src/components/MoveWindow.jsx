import * as React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const MoveWindow = ({open, handleCloseWindow}) => {
    console.log("asd")
    return (
        <div>
            <Box>
                <Modal
                handleDrop={open}
                handleCloseWindow={handleCloseWindow}
                className={"modal"}
                overlayClassName={"overlay"}
                >
                    <Grid>
                        <Grid>
                            <p>Are you sure you want to move this item?</p>   
                        </Grid>                
                        <Grid item sx={6}>
                            <Button>Yes</Button>
                        </Grid>
                        <Grid item sx={6}>
                            <Button></Button>
                        </Grid>
                    </Grid>
                </Modal>
            </Box>
        </div>
    )
};

export default MoveWindow;