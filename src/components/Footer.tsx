import { Container, Typography, Box, Grid2 as Grid } from '@mui/material';
import GridItem from './GridItem';
import ContactBox from './Contact/ContactBox';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, mt: 'auto', backgroundImage:"url('overlay-bg.jpg')", position:'relative', marginTop: "50px" }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '0px',
        padding: 0,
        height: '100%',
        width: '100%',
        opacity: 0.3,
        backgroundColor: '#a7caed',
      }}>
      </div>
      <Box sx={{position:'relative' }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <GridItem>
              <ContactBox />
            </GridItem>
          </Grid>
        </Grid>
        <Grid container size={12} spacing={2} justifyContent="center">
          <Grid size={4}>
            <GridItem>
              <div>
              &copy; {new Date().getFullYear()} All rights reserved.
              </div>
            </GridItem>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;

