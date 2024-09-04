import { Avatar, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from "@mui/material/Paper";
import GridItem from '../GridItem';
import classes from './AboutBox.module.css';

export interface AboutBoxProps {
  name:string;
  email:string;
  profile:string;
  phone:string;
  image:{
    src:string;
    altText:string
  };
  skills:Array<{
    name:string;
    weightText:string;
    weightAmount:number;
  }>;
}

const AboutBox: React.FC<AboutBoxProps> = (props) => {
  const {
    name,
    email,
    profile,
    phone,
    skills,
    image: {
      src:imageSrc,
      altText:imageAltText,
    }
  } = props;

  return (
    <Box
    >
      <Paper elevation={3}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <GridItem>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <GridItem>
                    <Grid container>
                      <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                        <GridItem><Avatar alt={imageAltText} src={imageSrc} variant="rounded" sx={{ width: '100%', height: '150px' }}/></GridItem>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
                        <GridItem>
                          <div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>Name:</div><div className={classes.profileDetailbox}>{name}</div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>Profile:</div><div className={classes.profileDetailbox}>{profile}</div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>Email:</div><div className={classes.profileDetailbox}>{email}</div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>Phone:</div><div className={classes.profileDetailbox}>{phone}</div>
                            </div>
                          </div>
                        </GridItem>
                      </Grid>
                    </Grid>
                  </GridItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <GridItem>
                    <div className={classes.skillBlock}>
                      <div className={classes.skillHeading}>Skills</div>
                      {skills.map((skill,idx)=>(<div className={classes.skillBox} key={idx}>
                        <div className={classes.skillBoxText}>
                          <div className={classes.skillBoxLeft}>{skill.name}</div>
                          <div className={classes.skillBoxRight}>{skill.weightText}</div>
                        </div>
                        <LinearProgress variant="determinate" value={skill.weightAmount} sx={{height:'10px'}}/>
                      </div>))}
                    </div>
                  </GridItem>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <GridItem>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <div className={classes.aboutMeContainer}>
                    <div className={classes.aboutMeTitle}>
                      About me
                    </div>
                    <div className={classes.aboutMeContent}>
                      <p>With over a decade of experience in software development, I have honed my skills across various technology stacks. My expertise lies in full-stack development, with a particular focus on backend-heavy solutions. Throughout my career, I have consistently delivered high-quality products to customers, ensuring that their needs are met with precision and care.</p>

                      <p>In addition to full-stack development, I have experience working with databases, cloud technologies, and real-time systems, all while managing to meet tight deadlines. My ability to adapt to different roles has been a key asset—I’ve thrived as a collaborator, a lone contributor, and a team leader. These experiences have provided me with unique perspectives on the software development process, allowing me to approach challenges from multiple standpoints.</p>

                      <p>I am confident in my ability to apply the lessons I’ve learned over the years to carry out my responsibilities efficiently and deliver quality results. As I look to the future, I am excited to apply my expertise to solving new problems and making a positive impact in the world.</p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutBox;