import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { TypesConfigNavbar } from 'src/@types/dashboard';

interface Props {
  pages: TypesConfigNavbar[];
}

const ComponentNavbar = ({ pages }: Props) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Box sx={{ flexGrow: 1, mr: 2, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page: TypesConfigNavbar) => (
            <Button key={page?.text} sx={{ my: 2, color: 'white', display: 'block' }} href={page?.href}>
              {page?.text}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { ComponentNavbar };
