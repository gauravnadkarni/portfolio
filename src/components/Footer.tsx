import { Container, Typography, Box, Grid2 as Grid } from '@mui/material';
import GridItem from './GridItem';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5', mt: 'auto' }}>
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
  );
};

export default Footer;