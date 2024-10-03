import { Box, Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import SkillsBox, {
  SkillsBoxPropsWithCallback,
} from "../components/skills/SkillsBox";
import useDataContext from "../hooks/DataContext";

const Home: React.FC = () => {
  const { skillsBoxProps } = useDataContext();
  return (
    <Grid size={12}>
      <GridItem>
        <Box sx={{ padding: "20px" }}>
          <SkillsBox
            skills={skillsBoxProps.skills.map<
              SkillsBoxPropsWithCallback["skills"][number]
            >((skill) => ({ ...skill, onClick: () => {
              let tokens = [];
              if(skill.caption.includes("/")) {
                tokens= skill.caption.split("/");
              } else {
                tokens.push(skill.caption);
              }
              window.open(`https://www.google.com/search?q=${tokens.join("+OR+")}`, "_blank", "noopener,noreferrer");
            } }))}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
