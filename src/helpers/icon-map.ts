import PlaceIcon from "@mui/icons-material/Place";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIconComponent } from "@mui/icons-material";

const DATA:Record<string, SvgIconComponent> =  {
  ADDRESS: PlaceIcon,
  PHONE: PhoneEnabledIcon,
  EMAIL: EmailIcon,
  LINKEDIN: LinkedInIcon,
  GITHUB: GitHubIcon,
  YOUTUBE: YouTubeIcon,
};

export default DATA;
