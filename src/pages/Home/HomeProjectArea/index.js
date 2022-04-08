import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Whatshot from "@material-ui/icons/Whatshot";
import School from "@material-ui/icons/School";
//wab app
import SubtitlesIcon from "@material-ui/icons/Subtitles"; 
// tv app
import TvIcon from "@material-ui/icons//Tv";
//work project
import WorkOutlineIcon from "@material-ui/icons//WorkOutline";
//andoid app
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
// pc app 
import ComputerIcon from "@material-ui/icons/Computer";
//app
import AppsIcon from "@material-ui/icons/Apps";
//recarch paper
// import ArticleIcon from "@material-ui/icons/Article";
//
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
//rocket
import SubjectIcon from "@material-ui/icons/Subject";
//stars
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
// import { Rocket, RocketLaunch, Article } from "@material-ui/icons";

// import wallpaper from './wallpaper.png';

class HomeEducationArea extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#00ad45" }}>
        <Grid container justifyContent="center" style={{ paddingTop: "2rem" }}>
          <Grid item lg={12}>
            <Typography
              align="center"
              variant="h3"
              style={{
                fontFamily: "poppins-bold, sans-serif",
                color: "#ebebeb"
              }}
            >
              Project{" "}
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
              Idea can change World{" "}
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
                //Paper-Crop Disease Recognition
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255,255,255,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255,255,255)"
                }}
                iconStyle={{
                  background: "rgb(255,255,255)",
                  color: "rgba(222,0,222,0.77)"
                }}
                date="2020/11 - 2022/1"
                icon={<SubjectIcon />}
              >
                <Typography variant="h6"> Crop Disease Recognition </Typography>{" "}
                <Typography variant="subtitle1">
                  {" "}
                  <a
                    style={{
                      color: "rgba(222,0,222,0.77)"
                    }}
                    href="https://sites.google.com/diu.edu.bd/crop-diseases"
                  >
                    See More
                  </a>{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  💫In this research we will be identifying crop diseases using
                  Deep Learning algorithms (CNN) which will help people to
                  identify Crop Diseases in a simpler way ✧ <br />
                  💫 We used Keras framework and we Compare two model Mobilenet
                  and Vgg16 Where Mobilenet shown good Performance ✧ <br />
                  💫 We collected almost 85000+ data For 37 classes in our
                  research. Finally we Got 98.52% accuracy rate ✧{" "}
                </Typography>
              </VerticalTimelineElement>
              {
                //Wab App-Online Shopping
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255,255,255,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255,255,255)"
                }}
                iconStyle={{
                  background: "rgb(255,255,255)",
                  color: "rgba(0,22,222,0.77)"
                }}
                date="2019-10 - 2019-12"
                icon={<SubtitlesIcon />}
              >
                <Typography variant="h6"> Online Shopping </Typography>{" "}
                <Typography variant="subtitle1">
                  {" "}
                  <a
                    style={{
                      color: "rgba(0,22,222,0.77)"
                    }}
                    href="https://github.com/SaifuddinGsohan/Online-shopping"
                  >
                    Github
                  </a>{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  💫 E-Commerce dynamic web application using Laravel Framework.
                  Back End used PHP language and Data Storage MySQL ✧ <br />
                  💫 Design the Front End as a Web Designer used HTML, CSS,
                  JavaScript and jQuery ✧ <br />
                  💫 Develop project concepts and maintain optimal workflow ✧{" "}
                </Typography>
              </VerticalTimelineElement>
              {
                //Software-Transportation and Shipments
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255,255,255,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255,255,255)"
                }}
                iconStyle={{
                  background: "rgb(255,255,255)",
                  color: "rgba(255,222,0,0.77)"
                }}
                date="2018/10 - 2018/12"
                icon={<ComputerIcon />}
              >
                <Typography variant="h6">
                  {" "}
                  Transportation and Shipments{" "}
                </Typography>{" "}
                <Typography variant="subtitle1">
                  <a
                    style={{
                      color: "rgba(255,222,0,0.77)"
                    }}
                    href="https://github.com/SaifuddinGsohan/Transportation-and-Shipments"
                  >
                    Github
                  </a>{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  💫 The main goal of project shipment planning is to transport
                  oversized cargo with the utmost safety and cost effective way
                  ✧ <br />
                  💫 I used Java and SQL Language ✧{" "}
                </Typography>
              </VerticalTimelineElement>
              {
                //Android
              }
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255,255,255,0.77)",
                  color: "#000"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(255,255,255)"
                }}
                iconStyle={{
                  background: "rgb(255,255,255)",
                  color: "rgba(0,222,88,0.77)"
                }}
                date="2022/1 - present"
                icon={<PhoneAndroidIcon />}
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
                //End
              }
              <VerticalTimelineElement
                iconStyle={{
                  background: "rgba(255,215,0,1)",
                  color: "rgba(0,0,0,0.77)"
                }}
                icon={<BubbleChartIcon />}
              />
            </VerticalTimeline>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </div>
    );
  }
}

export default HomeEducationArea;
