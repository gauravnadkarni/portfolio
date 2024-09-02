import { Grid2 as Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GridItem from "../components/GridItem";
import WorkHistoryBoxes from "../components/work-history/WorkHistoryBoxes";
import { WorkHistoryBoxProps } from "../components/work-history/WorkHistoryBox";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DATA:Array<WorkHistoryBoxProps> = [
    {
      key:"1",
      type:"Work",
      oppText: "2023",
      mainText: "Fena.co",
      subText: "Consultant(remote)",
      smallText: "London, UK",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    },
    {
      key:"2",
      type:"Certification",
      oppText: "2020",
      mainText: "ACP-600 & ACP-620",
      subText: "Atlassian Certification",
      smallText: "",
      dotIcon: <MilitaryTechIcon />,
      dotColor: "info",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "right",
    },
    {
      key:"3",
      type:"Work",
      oppText: "2019",
      mainText: "Empyra Software Solutions",
      subText: "Tech Lead",
      smallText: "Bangalore, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    },
    {
      key:"4",
      type:"Work",
      oppText: "2019",
      mainText: "Rakutan India Pvt Ltd",
      subText: "Senior Software Engineer",
      smallText: "Bangalore, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "right",
    },
    {
      key:"5",
      type:"Work",
      oppText: "2018",
      mainText: "Sourcebits Pvt Ltd",
      subText: "Associate Tech Lead",
      smallText: "Bangalore, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    },
    {
      key:"6",
      type:"Work",
      oppText: "2014",
      mainText: "Nalashaa Solutions Pvt Ltd",
      subText: "Senior Software Engineer",
      smallText: "Bangalore, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "right",
    },
    {
      key:"7",
      type:"Work",
      oppText: "2012",
      mainText: "Stridus Infotech Pvt ltd",
      subText: "Software Engineer",
      smallText: "Bangalore, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    },
    {
      key:"8",
      type:"Certification",
      oppText: "2011",
      mainText: "OCJP 1.6",
      subText: "Oracle Certification",
      smallText: "",
      dotIcon: <MilitaryTechIcon />,
      dotColor: "info",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "right",
    },
    {
      key:"9",
      type:"Study",
      oppText: "2011",
      mainText: "Programing Courses",
      subText: "Seed Infotech",
      smallText: "Pune, India",
      dotIcon: <MenuBookIcon/>,
      dotColor: "info",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    },
    {
      key:"10",
      type:"Work",
      oppText: "2010",
      mainText: "Nanu Engineers Pvt Ltd (India)",
      subText: "System Admin",
      smallText: "Goa, India",
      dotIcon: <WorkIcon />,
      dotColor: "primary",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "right",
    },
    {
      key:"11",
      type:"Study",
      oppText: "2008",
      mainText: "Bachelor of Engineering(IT)",
      subText: "Goa University",
      smallText: "Goa, India",
      dotIcon: <SchoolIcon />,
      dotColor: "info",
      dotTooltip: 
        <>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>,
      tooltipPlacement: "left",
    }
  ];

const Landing: React.FC = () => {
  return (
    <Grid size={12}>
      <GridItem>
        <WorkHistoryBoxes workItems={DATA}/>
      </GridItem>
    </Grid>
  );
};

export default Landing;
