import { Box, Grid2 as Grid, useTheme } from '@mui/material';
import {getIconFromText} from "../helpers/icon-map";
import useDataContext from "../hooks/DataContext";
import ContactBox, { ContactBoxPropsWithIcons } from './Contact/ContactBox';
import GridItem from './GridItem';

const Footer: React.FC = () => {
  const {contactBoxProps} = useDataContext();
  const theme = useTheme();
  const contactBoxPropsWithIcons:ContactBoxPropsWithIcons = {
    physicalAddresses: contactBoxProps.physicalAddresses.map((address)=>({
      ...address,
      icon: getIconFromText(address.icon)
    })),
    socialLinks: contactBoxProps.socialLinks.map((social)=>({
      ...social,
      icon: getIconFromText(social.icon)
    }))
  }

  return (
    <Box sx={{ py: 4, mt: 'auto', position:'relative', marginTop: "50px" }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '0px',
        padding: 0,
        height: '100%',
        width: '100%',
        opacity: 0.7,
        backgroundColor: theme.palette.custom.footerBackground,
      }}>
      </div>
      <Box sx={{position:'relative' }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <GridItem>
              <ContactBox {...contactBoxPropsWithIcons}/>
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

