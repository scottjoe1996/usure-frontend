import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar as MaterialAppBar, Toolbar, Typography } from '@mui/material';
import { Assessment } from '@mui/icons-material';

import { theme } from '../../theme';

const appBarTitle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none'
};

const AppBar = (): React.ReactElement => {
  const navigate = useNavigate();

  const routeToHome = (): void => {
    navigate('/');
  };

  return (
    <MaterialAppBar position='static'>
      <Toolbar onClick={routeToHome} sx={{ cursor: 'pointer', gap: theme.spacing(1) }}>
        <Assessment />
        <Typography variant='h6' noWrap sx={appBarTitle}>
          Usure
        </Typography>
      </Toolbar>
    </MaterialAppBar>
  );
};
export default AppBar;
