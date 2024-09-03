import StorageIcon from '@mui/icons-material/Storage';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import classes from './BlogCard.module.css';

const Image: React.FC<PropsWithChildren> = () => (
  <div style={{padding:'20px'}}>
    <div className={classes.imageBox}>
      <div>
        <StorageIcon color='primary' style={{fontSize: '45px'}}/>
      </div>
    </div>
  </div>
)

const BlogCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          sx={{'padding':'20px'}}
          component={Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
