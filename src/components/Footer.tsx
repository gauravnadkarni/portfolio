import { Container, Typography, Box, Grid2 as Grid } from '@mui/material';
import GridItem from './GridItem';
import ContactBox, { ContactBoxPropsWithIcons } from './Contact/ContactBox';
import useDataContext from "../hooks/DataContext";
import ICON_MAP from "../helpers/icon-map";
import { SvgIconComponent } from '@mui/icons-material';

const Footer: React.FC = () => {
  const {contactBoxProps} = useDataContext();
  const contactBoxPropsWithIcons:ContactBoxPropsWithIcons = {
    physicalAddresses: contactBoxProps.physicalAddresses.map((address)=>({
      ...address,
      icon: ICON_MAP[address.icon]
    })),
    socialLinks: contactBoxProps.socialLinks.map((social)=>({
      ...social,
      icon: ICON_MAP[social.icon]
    }))
  }

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

