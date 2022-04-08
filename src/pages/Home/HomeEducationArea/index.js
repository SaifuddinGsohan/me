import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Whatshot from "@material-ui/icons/Whatshot";
import School from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarsIcon from "@material-ui/icons/Stars";
import PaletteIcon from "@material-ui/icons/Palette";
import PublicIcon from "@material-ui/icons/Public";
import BuildIcon from "@material-ui/icons/Build";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import StarIcon from "@material-ui/icons/Star";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { } from "@material-ui/icons";

// import wallpaper from './wallpaper.png';

class HomeEducationArea extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ebebeb" }}>
        <Grid container justifyContent="center" style={{ paddingTop: "2rem" }}>
          <Grid item lg={12}>
            <Typography
              align="center"
              variant="h3"
              style={{
                fontFamily: "poppins-bold, sans-serif",
                color: "#00ad45"
              }}
            >
              Education{" "}
            </Typography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid container justifyContent="center" style={{ paddingTop: "1rem" }}>
          <Grid item lg={12}>
            <Typography
              align="center"
              variant="h5"
              style={{
                fontFamily: "poppins-bold, sans-serif",
                color: "#fff"
              }}
            >
              Knolage is Power
            </Typography>{" "}
          </Grid>{" "}
        </Grid>
        <Grid
          container
          justifyContent="center"
          style={{ paddingBottom: "2rem" }}
        >
          <Grid item lg={12}>
            <VerticalTimeline>
              {
                //Work
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255,215,0,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255,215,0)"
                }}
                iconStyle={{ background: "rgb(255,215,0)", color: "#fff" }}
                date="2022/1 - present"
                icon={<WorkIcon />}
              >
                <Typography variant="h6"> Software Engineer </Typography>{" "}
                <Typography variant="subtitle1">
                  {" "}
                  Intigsol Limited (Al-Manar Group)
                  <br /> Dhaka{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  Working as a web developer intern in this company.It was a
                  good start.
                  <br />I am MERN Stand developer.{" "}
                </Typography>
              </VerticalTimelineElement>
              {
                //School
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0,222,88,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(0,222,88)"
                }}
                iconStyle={{ background: "rgb(0,222,88)", color: "#ffffff" }}
                date="2017/1 - 2021/12"
                icon={<School />}
              >
                <Typography variant="h6">Bachelor Degree </Typography>{" "}
                <Typography variant="subtitle1">
                  Daffodil International University
                  <br />
                  Ashulia, Dhaka, Bangladesh{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  Computer Science and Engineering - (CSE) <br />
                  CGPA: 3.29 Out Of 4{" "}
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0,222,88,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(0,222,88)"
                }}
                iconStyle={{ background: "rgb(0,222,88)", color: "#ffffff" }}
                date="2015/1 - 2017/1"
                icon={<School />}
              >
                <Typography variant="h6">Colleage </Typography>{" "}
                <Typography variant="subtitle1">
                  Shishu kunja school and colleage
                  <br /> Jhenaidah, Jessore, Bangladesh{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  Higher Secondary Certificate - (HSC) <br />
                  GPA - 3.33 Out Of 5{" "}
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0,222,88,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(0,222,88)"
                }}
                iconStyle={{ background: "rgb(0,222,88)", color: "#ffffff" }}
                date="2013/1 - 2015/1"
                icon={<School />}
              >
                <Typography variant="h6">High School </Typography>{" "}
                <Typography variant="subtitle1">
                  Sarishabari R.D.M.Model Pilot High
                  <br /> Shamshabad, Jamalpur, Bangladesh{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  Secondary School Certificate - (SSC) <br />
                  GPA - 4.39 Out Of 5{" "}
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{
                  background: "rgba(0,0,0,1)",
                  color: "rgba(255,215,0,1)"
                }}
                icon={<Whatshot fontSize="large" />}
              />
            </VerticalTimeline>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </div>
    );
  }
}

export default HomeEducationArea;
