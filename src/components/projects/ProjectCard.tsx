import { SvgIconComponent } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import classes from "./ProjectCard.module.css";
import { SupportedIconType } from "../../helpers/icon-map";

export type ProjectCardProps = {
  image: string;
  shortTitle: string;
  longTitle: string;
  shortDescription: string;
  longDescription: Array<string>;
  type: "public" | "private";
  tech: Array<{
    link: string;
    name: string;
  }>;
  links: Array<{
    link?: string;
    iconText: string;
  }>;
};

export type ProjectCardPropsWithIcons = {
  links: Array<{
    link?: string;
    iconText: SupportedIconType;
    icon: SvgIconComponent;
  }>;
  onProjectInfoClick:(title:string, description:Array<string>)=>void
} & Omit<ProjectCardProps, "links">;

const generateRibbon = (type: ProjectCardProps["type"]) => {
  return (
    type === "private" && (
      <div className={classes.ribbon} title="Project Done for an Organization">
        ORG
      </div>
    )
  );
};

const ProjectCard: React.FC<ProjectCardPropsWithIcons> = (props) => {
  const {
    image,
    shortTitle,
    longTitle,
    shortDescription,
    longDescription,
    tech,
    links,
    type,
    onProjectInfoClick,
  } = props;
  return (
      <div className={classes.cardRoot}>
        {generateRibbon(type)}
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image || "/assets/images/project-placeholder.png"}
            alt={longTitle}
            classes={{ img: classes.imageMedia }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {shortTitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", height: "auto" }}
            >
              {shortDescription}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", padding: "5px" }}
            >
              {tech &&
                tech.map((techObj) => (
                  <Chip
                    style={{ margin: "5px" }}
                    color="primary"
                    label={techObj.name}
                    component="a"
                    clickable
                    target="_blank"
                    href={techObj.link}
                  />
                ))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {links &&
              links.map((link, idx) => (
                <IconButton key={idx}>
                  <Tooltip title={link.iconText && link.iconText.toLowerCase()}>
                    <link.icon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if(link.iconText === SupportedIconType.INFO) {
                          onProjectInfoClick(longTitle, longDescription);
                        } else if (link.link) {
                          window.open(link.link, "_blank", "noopener,noreferrer");
                        } 
                      }}
                    />
                  </Tooltip>
                </IconButton>
              ))}
          </CardActions>
        </Card>
      </div>
  );
};

export default ProjectCard;
