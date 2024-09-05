import { SvgIconComponent } from "@mui/icons-material";
import { Grid2 as Grid } from "@mui/material";
import GridItem from "../GridItem";
import classes from "./ContactBox.module.css";

export type ContactBoxProps = {
  physicalAddresses: Array<{
    caption: string;
    value: string;
    icon: string;
  }>;
  socialLinks: Array<{
    link: string;
    icon: string;
  }>;
};

export type ContactBoxPropsWithIcons = {
  physicalAddresses: Array<{
    caption: string;
    value: string;
    icon: SvgIconComponent;
  }>;
  socialLinks: Array<{
    link: string;
    icon: SvgIconComponent;
  }>;
};

const ContactBox: React.FC<ContactBoxPropsWithIcons> = ({
  socialLinks,
  physicalAddresses,
}) => {
  return (
    <>
      <Grid container size={12} spacing={2} justifyContent="center">
        {physicalAddresses.map((physicalAddress) => {
          return (
            <Grid size={{ xl: 2, lg: 3, md: 4, sm: 12, xs: 12 }}>
              <GridItem>
                <div className={classes.contactContainer}>
                  <div className={classes.contactContainerIcon}>
                    <physicalAddress.icon
                      classes={{ root: classes.addressIcon }}
                    />
                  </div>
                  <div className={classes.contactContainerKey}>
                    {physicalAddress.caption}
                  </div>
                  <div className={classes.contactContainerValue}>
                    {physicalAddress.value}
                  </div>
                </div>
              </GridItem>
            </Grid>
          );
        })}
      </Grid>
      <Grid container size={12} spacing={2} justifyContent="center">
        <Grid size={{ lg: 4, sm: 12 }}>
          <GridItem>
            <div className={classes.contactSocialContainer}>
              <div className={classes.contactSocialContainerText}>
                Find me on
              </div>
              <div className={classes.contactSocialContainerIcons}>
                {socialLinks.map((socialLink) => (
                  <div className={classes.contactSocialContainerIcon}>
                    <a target="_blank" href={socialLink.link} rel="noreferrer">
                      <socialLink.icon classes={{ root: classes.socialIcon }} />
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
