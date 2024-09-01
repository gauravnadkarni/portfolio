import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GridItem from "../components/GridItem";

interface LayoutProps {
  children: React.ReactNode;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-cover bg-center h-screen"  style={{'backgroundImage': 'url("intro-bg.jpg")'}}>
        <Container maxWidth="lg">
          <Grid container>
            <Header />
            <div className="flex justify-center items-center flex-col" style={{'height': '100vh', 'margin':'auto'}}>
              <div className="text-7xl text-white font-semibold" style={{'marginBottom':'10px'}}>I am Gaurav Nadkarni</div>
              <div className="text-2xl text-white font-extralight">#Full Stack Developer #Backend Developer</div>
            </div>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: "2rem" }}>
          {children}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
