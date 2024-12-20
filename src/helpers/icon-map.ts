import PlaceIcon from "@mui/icons-material/Place";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FeedbackIcon from '@mui/icons-material/Feedback';
import InfoIcon from '@mui/icons-material/Info';
import { SvgIconComponent } from "@mui/icons-material";

export enum SupportedIconType {
  ADDRESS = "ADDRESS",
  PHONE = "PHONE",
  EMAIL = "EMAIL",
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  YOUTUBE = "YOUTUBE",
  INFO = "INFO",
  DEFAULT = "DEFAULT_ICON",
}

const DATA: Record<SupportedIconType, SvgIconComponent> = {
  [SupportedIconType.ADDRESS]: PlaceIcon,
  [SupportedIconType.PHONE]: PhoneEnabledIcon,
  [SupportedIconType.EMAIL]: EmailIcon,
  [SupportedIconType.LINKEDIN]: LinkedInIcon,
  [SupportedIconType.GITHUB]: GitHubIcon,
  [SupportedIconType.YOUTUBE]: YouTubeIcon,
  [SupportedIconType.DEFAULT]: FeedbackIcon,
  [SupportedIconType.INFO]: InfoIcon,
};

export const getIconFromText = (iconText:string):SvgIconComponent => {
  let icon:SvgIconComponent = FeedbackIcon;
  switch (iconText) {
    case SupportedIconType.ADDRESS:
    case SupportedIconType.PHONE:
    case SupportedIconType.EMAIL:
    case SupportedIconType.LINKEDIN:
    case SupportedIconType.GITHUB:
    case SupportedIconType.YOUTUBE:
    case SupportedIconType.INFO:
      icon = DATA[iconText];
      break;
    default:
      icon = DATA[SupportedIconType.DEFAULT];
      break;
  }
  return icon;
};
