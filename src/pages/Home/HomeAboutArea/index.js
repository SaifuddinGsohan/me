import React from "react";
import { Grid, Typography } from "@material-ui/core";

import logo from "../../../images/logo.jpeg";
import HomeContactButtons from "../HomeContactButtons";
import { WEBSITE_LINK, EMAIL_ID } from "../../../constant";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  heading: {
    fontFamily: "poppins-bold, sans-serif",
    color: theme.palette.primary.main,
  },
}));

const HomeAboutArea = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div id="about" />
      <Grid container justifyContent="center" style={{ paddingTop: "3rem" }}>
        <Grid item lg={12}>
          <Typography align="center" variant="h4" className={classes.heading}>
            About{" "}
          </Typography>{" "}
        </Grid>{" "}
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{ paddingTop: "2rem", paddingBottom: "0rem" }}
      >
        <Grid item>
          <img src={logo} alt="logo" style={{ maxHeight: "15rem" }} />{" "}
        </Grid>{" "}
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{ paddingTop: "0rem", paddingBottom: "2rem" }}
      >
        <Grid item>
          <Typography
            align="center"
            variant="body1"
            style={{ maxWidth: "30rem", top: "50%" }}
          >
            Successful Programmer with exceptional talents in Deep learning and
            Data Analytics. Advanced knowledge of Design and IOT. Logical and
            Professional with excellent problem-solving skills. Highly-skilled
            Programmer with Software Design, Development and Integration.
            Interested & Learning on AI, BlockChain, Web 3.0, Cyber Security{" "}
          </Typography>{" "}
        </Grid>{" "}
      </Grid>

      <Grid container justifyContent="center" style={{ paddingBottom: "2rem" }}>
        <Grid item>
          <Typography align="left" variant="h5">
            Personal Info{" "}
          </Typography>
          <div style={{ paddingTop: "2rem" }}>
            <Typography align="left" variant="h6">
              Full Name:
            </Typography>{" "}
            <Typography align="left" variant="body2">
              <span> S.M. Sohan </span> <br />
              <span style={{ fontFamily: "Mina" }}>সাইফুদ্দিন সোহান </span>{" "}
            </Typography>{" "}
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Typography align="left" variant="h6">
              Date Of Birth:
            </Typography>{" "}
            <Typography align="left" variant="body2">
              April 11, 2000{" "}
            </Typography>{" "}
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Typography align="left" variant="h6">
              Email:
            </Typography>{" "}
            <a href={`mailto: ${EMAIL_ID}`}>
              <Typography align="left" variant="body2">
                {" "}
                {EMAIL_ID}{" "}
              </Typography>{" "}
            </a>{" "}
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <Typography align="left" variant="h6">
              Website:
            </Typography>{" "}
            <a href={WEBSITE_LINK}>
              <Typography align="left" variant="body2">
                {" "}
                {WEBSITE_LINK}{" "}
              </Typography>{" "}
            </a>{" "}
          </div>{" "}
        </Grid>
        <Grid item lg={2}>
          {" "}
        </Grid>
        <Grid item>
          <Typography align="center" variant="h5">
            Skills{" "}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ maxWidth: "20rem", paddingTop: "2rem" }}
          >
            Pytorch, Tensorflow, Keras, Scikit - Learn, Deep Learning, Machine
            Learning, MatLab, OpenCV, Pandas, NumPy{" "}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ maxWidth: "20rem", paddingTop: "2rem" }}
          >
            React Native, React, Node.js, Django, Bootstrap, Tailwind, Sass,
            Less, jQuery (PHP, HTML, CSS, JavaScript) XML, AJAX, JSON, SQL,
            MySQL, MongoDB{" "}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ maxWidth: "20rem", paddingTop: "2rem" }}
          >
            Data Structure and Algorithm, OOPS, Python, C, C++, #C, Java,{" "}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ maxWidth: "20rem", paddingTop: "2rem" }}
          >
            Ubuntu, Linux, Google Cloud Platform(GCP), Git, Github{" "}
          </Typography>{" "}
        </Grid>{" "}
      </Grid>

      <HomeContactButtons />
    </React.Fragment>
  );
};

export default HomeAboutArea;
