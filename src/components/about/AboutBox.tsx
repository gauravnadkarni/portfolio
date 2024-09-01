import styles from './AboutBox.module.css';
import Grid from '@mui/material/Grid2';
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Avatar, Box } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

const AboutBox: React.FC = () => {
  return (
    <Box
    >
      {/*<Paper elevation={3}>
        <div>
          <div>
            <div>
              <div className="profilePic">
                <Avatar alt="Gaurav Nadkarni" src="/static/images/avatar/1.jpg" />
              </div>
              <div className="profileDetails"></div>
            </div>
            <div>
              <div className="skillHeader"></div>
              <div className="skillDetails"></div>
            </div>
          </div>
          <div>
            <div className="detailsHader"></div>
            <div className="detailedDescription"></div>
          </div>
        </div>
      </Paper>*/}
      <Paper elevation={3}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Item>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <Item>
                    <Grid container>
                      <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                        <Item><Avatar alt="Gaurav Nadkarni" src="/static/images/avatar/1.jpg" variant="rounded" sx={{ width: '100%', height: '8vw' }}/></Item>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
                        <Item>
                          <div>
                            <div className={styles.profileDetailContainer}>
                              <div className={styles.profileDetailbox}>Name:</div><div className={styles.profileDetailbox}>Gaurav Nadkarni</div>
                            </div>
                            <div className={styles.profileDetailContainer}>
                              <div className={styles.profileDetailbox}>Name:</div><div className={styles.profileDetailbox}>Gaurav Nadkarni</div>
                            </div>
                            <div className={styles.profileDetailContainer}>
                              <div className={styles.profileDetailbox}>Name:</div><div className={styles.profileDetailbox}>Gaurav Nadkarni</div>
                            </div>
                            <div className={styles.profileDetailContainer}>
                              <div className={styles.profileDetailbox}>Name:</div><div className={styles.profileDetailbox}>Gaurav Nadkarni</div>
                            </div>
                          </div>
                        </Item>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <Item>
                    <div className={styles.skillBlock}>
                      <div className={styles.skillHeading}>Skill</div>
                      <div className={styles.skillBox}>
                        <div className={styles.skillBoxText}>
                          <div className={styles.skillBoxLeft}>HTML</div>
                          <div className={styles.skillBoxRight}>80%</div>
                        </div>
                        <LinearProgress variant="determinate" value={50} sx={{height:'10px'}}/>
                      </div>
                      <div className={styles.skillBox}>
                        <div className={styles.skillBoxText}>
                          <div className={styles.skillBoxLeft}>HTML</div>
                          <div className={styles.skillBoxRight}>80%</div>
                        </div>
                        <LinearProgress variant="determinate" value={50} sx={{height:'10px'}} />
                      </div>
                      <div className={styles.skillBox}>
                        <div className={styles.skillBoxText}>
                          <div className={styles.skillBoxLeft}>HTML</div>
                          <div className={styles.skillBoxRight}>80%</div>
                        </div>
                        <LinearProgress variant="determinate" value={50} sx={{height:'10px'}} />
                      </div>
                      <div className={styles.skillBox}>
                        <div className={styles.skillBoxText}>
                          <div className={styles.skillBoxLeft}>HTML</div>
                          <div className={styles.skillBoxRight}>80%</div>
                        </div>
                        <LinearProgress variant="determinate" value={50} sx={{height:'10px'}} />
                      </div>
                      <div className={styles.skillBox}>
                        <div className={styles.skillBoxText}>
                          <div className={styles.skillBoxLeft}>HTML</div>
                          <div className={styles.skillBoxRight}>80%</div>
                        </div>
                        <LinearProgress variant="determinate" value={50} sx={{height:'10px'}} />
                      </div>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Item>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <div>
                    <div>
                      About me
                    </div>
                    <div>
                      <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                      <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.</p>
                      <p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutBox;