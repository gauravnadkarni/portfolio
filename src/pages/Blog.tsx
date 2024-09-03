import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import BlogCard from "../components/blogs/BlogCard";

const Blog: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <BlogCard />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default Blog;
