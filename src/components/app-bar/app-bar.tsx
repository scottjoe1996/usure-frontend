import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar as MaterialAppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Assessment } from '@mui/icons-material';

import { theme } from '../../theme';

const AppBar = (): React.ReactElement => {
  const navigate = useNavigate();

  const routeToHome = (): void => {
    navigate('/');
  };

  return (
    <MaterialAppBar position='static'>
      <Toolbar sx={{ width: 'min-content' }}>
        <Grid container spacing={theme.spacing(1)} onClick={routeToHome} sx={{ cursor: 'pointer', flexWrap: 'nowrap', alignItems: 'flex-end' }}>
          <Grid item>
            <Assessment />
          </Grid>
          <Grid item>
            <Typography variant='h6' noWrap>
              Usure
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};
export default AppBar;
