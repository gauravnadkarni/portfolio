import { Grid, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Grid item>
      <Typography variant="h3" component="h1" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1" paragraph>
        Home Text
      </Typography>
    </Grid>
  );
}

export default Home;