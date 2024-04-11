import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});

const StyledTitle = styled(Typography)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  background: 'white',
  color: 'black',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.8)',
  },
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <StyledTitle variant="h6" component="div">
            Gerenciamento de Projetos
          </StyledTitle>
          <StyledButton variant="contained">Login</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Header;
