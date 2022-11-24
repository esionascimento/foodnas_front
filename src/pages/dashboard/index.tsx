import { HeadPage } from '@Components/Head';
import { Box, Container } from '@mui/material';
import { Footer } from '@Components/Footer';
import { ComponentNavbar } from '@Components/Navbar';
import { configNavbarTabs } from '@Config/dashboard/index';
import Grid2 from '@mui/material/Unstable_Grid2';

const PageDashboard = () => {
  return (
    <Box>
      <HeadPage title={'FoodNas-Dashboard'} content={'dashboard'} />
      <Container maxWidth={false}>
        <Box>
          <ComponentNavbar pages={configNavbarTabs} />
        </Box>
        <Box>
          <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
            {Array.from(Array(4)).map((_, index) => (
              <Grid2 mobile={6} tablet={4} laptop={3} key={index}>
                <div>{index + 1}</div>
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <Box sx={{ bottom: 0, left: 0, position: 'fixed', width: '100%' }}>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default PageDashboard;
