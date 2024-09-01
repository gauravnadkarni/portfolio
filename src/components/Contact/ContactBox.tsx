import classes from './ContactBox.module.css';
import { PropsWithChildren } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Grid2 as Grid , Link } from "@mui/material";
import GridItem from '../GridItem';

const ContactBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Grid container size={12} spacing={2} justifyContent="center">
        <Grid size={4}>
          <GridItem>
            <div className={classes.ContactTitle}>
            Contact
            </div>
          </GridItem>
        </Grid>
      </Grid>
      <Grid container size={12} spacing={2}>
        <Grid size={4}>
          <GridItem>
            <div className={classes.contactContainer}>
              <div className={classes.contactContainerIcon}><PlaceIcon classes={{root:classes.iconColor}}/></div>
              <div className={classes.contactContainerKey}>Address</div>
              <div className={classes.contactContainerValue}>520/A, shirod curchorem, Goa India - 403706</div>
            </div>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem>
            <div className={classes.contactContainer}>
              <div className={classes.contactContainerIcon}><PhoneEnabledIcon classes={{root:classes.iconColor}}/></div>
              <div className={classes.contactContainerKey}>Phone</div>
              <div className={classes.contactContainerValue}>+91 (895) 133 5234</div>
            </div>
          </GridItem>
        </Grid>
        <Grid size={4}>
          <GridItem>
            <div className={classes.contactContainer}>
              <div className={classes.contactContainerIcon}><EmailIcon classes={{root:classes.iconColor}}/></div>
              <div className={classes.contactContainerKey}>Email</div>
              <div className={classes.contactContainerValue}>nadkarnigaurav@gmail.com</div>
            </div>
          </GridItem>
        </Grid>
      </Grid>
      <Grid container size={12} spacing={2} justifyContent="center">
        <Grid size={4}>
          <GridItem>
            <div className={classes.contactSocialContainer}>
              <div className={classes.contactSocialContainerText}>Find me on</div>
              <div className={classes.contactSocialContainerIcons}>
                <div className={classes.contactSocialContainerIcon}><LinkedInIcon /></div>
                <div className={classes.contactSocialContainerIcon}><GitHubIcon /></div>
              </div>
            </div>
          </GridItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBox;
