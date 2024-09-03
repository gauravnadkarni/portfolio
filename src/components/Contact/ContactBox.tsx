import classes from './ContactBox.module.css';
import { PropsWithChildren } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Grid2 as Grid , Link } from "@mui/material";
import GridItem from '../GridItem';
import { SvgIconComponent } from '@mui/icons-material';

export type ContactBoxProps = {
  physicalAddresses: Array<{
    caption:string;
    value:string;
    icon:string;
  }>;
  socialLinks:Array<{
    link:string;
    icon:string;
  }>;
}

export type ContactBoxPropsWithIcons = {
  physicalAddresses: Array<{
    caption:string;
    value:string;
    icon: SvgIconComponent;
  }>;
  socialLinks: Array<{
    link:string;
    icon: SvgIconComponent;
  }>;
}

const ContactBox: React.FC<ContactBoxPropsWithIcons> = ({ socialLinks, physicalAddresses }) => {
  return (
    <>
      <Grid container size={12} spacing={2} justifyContent="center">
        
          {physicalAddresses.map((physicalAddress)=>{
            return(
              <Grid size={2}>
                <GridItem>
                  <div className={classes.contactContainer}>
                    <div className={classes.contactContainerIcon}><physicalAddress.icon classes={{root:classes.addressIcon}}/></div>
                    <div className={classes.contactContainerKey}>{physicalAddress.caption}</div>
                    <div className={classes.contactContainerValue}>{physicalAddress.value}</div>
                  </div>
                </GridItem>
              </Grid>
          )})}
      </Grid>
      <Grid container size={12} spacing={2} justifyContent="center">
        <Grid size={4}>
          <GridItem>
            <div className={classes.contactSocialContainer}>
              <div className={classes.contactSocialContainerText}>Find me on</div>
              <div className={classes.contactSocialContainerIcons}>
                {socialLinks.map((socialLink)=>(
                  <div className={classes.contactSocialContainerIcon}>
                    <a target='_blank' href={socialLink.link}>
                      <socialLink.icon classes={{root:classes.socialIcon}}/>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactBox;
