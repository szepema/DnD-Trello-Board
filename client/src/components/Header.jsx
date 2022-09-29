import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';


const Header = () => {
    return (
        <div className={"page-header"}>
            <Grid justifyContent="center" container spacing={1}>
                <Grid item xs={2}>
                    <p>Trello Dashboard</p>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="View" />
                    </FormGroup>
                </Grid>
            </Grid>
        </div>
    );
};


export default Header;