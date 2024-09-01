import classes from './BlogCard.module.css';
import { PropsWithChildren } from "react";
import classnames from "classnames";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';

const BlogCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/contemplative-reptile.jpg"
          alt="green iguana"
          classes={{img:classes.imageMedia}}
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
