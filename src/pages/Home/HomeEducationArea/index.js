import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Whatshot from '@material-ui/icons/Whatshot';
import School from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarsIcon from '@material-ui/icons/Stars';
import PaletteIcon from '@material-ui/icons/Palette';
import PublicIcon from '@material-ui/icons/Public';
import BuildIcon from '@material-ui/icons/Build';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import StarIcon from '@material-ui/icons/Star';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import wallpaper from './wallpaper.png';

class HomeEducationArea extends React.Component {
    render() {
        return ( < div style = {
                { backgroundColor: '#ebebeb' }
            } >
            <
            Grid container justify = "center"
            style = {
                { paddingTop: '2rem' }
            } >
            <
            Grid item lg = { 12 } >
            <
            Typography align = "center"
            variant = "h5"
            style = {
                { fontFamily: 'poppins-bold, sans-serif', color: '#00ad45' }
            } >
            Education < /Typography> </Grid > < /Grid> <Grid container justify = "center"
            style = {
                { paddingTop: '1rem' }
            } >
            <
            Grid item lg = { 12 } >
            <
            Typography align = "center"
            variant = "h4"
            style = {
                { fontFamily: 'poppins-bold, sans-serif', color: '#000000' }
            } >
            More of my credentials: -
            <
            /Typography> </Grid > < /Grid>

            <
            Grid container justify = "center"
            style = {
                { paddingBottom: '2rem' }
            } >
            <
            Grid item lg = { 12 } >

            <
            VerticalTimeline >
            <
            VerticalTimelineElement className = "vertical-timeline-element--work"
            date = "2017 - 2022"
            iconStyle = {
                { background: '#00ad45', color: '#ffffff' }
            }
            icon = { < School / > } >

            <
            Typography variant = "h6" >
            Bachelor Degree < /Typography> <
            Typography variant = "subtitle1" >
            Daffodil International University, Bangladesh < /Typography> <Typography variant = "body2" >
            Computer Science and Engineering - (CSE) < br / >
            CGPA: 3.35 Out Of 4(At the end of 10 Semesters) < /Typography>

            <
            /VerticalTimelineElement>

            <
            VerticalTimelineElement className = "vertical-timeline-element--work"
            date = "2015 - 2017"
            iconStyle = {
                { background: '#00ad45', color: '#ffffff' }
            }
            icon = { < School / > } >

            <
            Typography variant = "h6" >
            Colleage < /Typography> <
            Typography variant = "subtitle1" >
            Shishu kunja school and colleage, Jhenaidah, Jessore < /Typography> <
            Typography variant = "body2" >
            Higher Secondary Certificate - (HSC) < br / >
            GPA - 3.33 Out Of 5 < /Typography>

            <
            /VerticalTimelineElement>

            <
            VerticalTimelineElement className = "vertical-timeline-element--work"
            date = "2013 - 2015"
            iconStyle = {
                { background: '#00ad45', color: '#ffffff' }
            }
            icon = { < School / > } >

            <
            Typography variant = "h6" >
            High School < /Typography> <
            Typography variant = "subtitle1" >
            Sarishabari R.D.M.Model Pilot High, Shamshabad, Jamalpur < /Typography> <
            Typography variant = "body2" >
            Secondary School Certificate - (SSC) < br / >
            GPA - 4.39 Out Of 5 < /Typography>

            <
            /VerticalTimelineElement>

            <
            VerticalTimelineElement className = "vertical-timeline-element--work"
            contentStyle = {
                { background: 'rgb(33, 150, 243)', color: '#000' }
            }
            contentArrowStyle = {
                { borderRight: '7px solid  rgb(33, 150, 243)' }
            }
            date = "2011 - present"
            iconStyle = {
                { background: 'rgb(33, 150, 243)', color: '#fff' }
            }
            icon = { < StarsIcon / > } >
            <
            h3 className = "vertical-timeline-element-title" > Creative Director < /h3>  <
            h4 className = "vertical-timeline-element-subtitle" > Miami, FL < /h4>  <
            p >
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading < /p>  < /
            VerticalTimelineElement >

            <
            VerticalTimelineElement iconStyle = {
                { background: '#00ad45', color: '#fff' }
            }
            icon = { < Whatshot fontSize = "large" / > }
            />

            <
            /VerticalTimeline>  < /
            Grid > <
            /Grid>  < /
            div >
        )
    }
}

export default HomeEducationArea;