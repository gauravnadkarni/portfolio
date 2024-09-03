import { SvgIconComponent } from '@mui/icons-material';
import classes from './ProjectCard.module.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";

export type ProjectCardProps = {
  image:string;
  title:string;
  description:string;
  tech:Array<{
    link:string;
    name:string;
  }>;
  links:Array<{
    link:string;
    iconText:string;
  }>;
}

export type ProjectCardPropsWithIcons = {
  links:Array<{
    link:string;
    icon:SvgIconComponent;
  }>;
} & Omit<ProjectCardProps,"links">;

const ProjectCard: React.FC<ProjectCardPropsWithIcons> = (props) => {
  const {
    image,
    title,
    description,
    tech,
    links,
  } = props;
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image || "/assets/images/project-placeholder.png"}
        alt={title}
        classes={{img:classes.imageMedia}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', padding:'5px'}}>
          {tech && tech.map((techObj)=>(<Chip style={{margin:'5px'}} color='primary' label={techObj.name} component="a" clickable target='_blank' href={techObj.link}/>))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {links && links.map((link)=>(
          <IconButton>
            <link.icon style={{ cursor: 'pointer' }} onClick={()=>{
              window.open(link.link, '_blank', 'noopener,noreferrer');
            }}/>
          </IconButton>
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;