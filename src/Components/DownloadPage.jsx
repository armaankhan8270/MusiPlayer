import React from "react";
import "./MusicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseIcon from "@mui/icons-material/Pause";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import d from "./armaan.m4a";
import ds from "./Ainsi.m4a";
import a from "./a.m4a";
import b from "./b.m4a";
import c from "./c.m4a";
import e from "./e.m4a";
import f from "./f.m4a";
import g from "./g.m4a";
import h from "./h.m4a";
import i from "./i.m4a";
import j from "./j.m4a";
import k from "./k.m4a";
import aa from "./travis-yewell-F-B7kWlkxDQ-unsplash.jpg";
import bb from "./namroud-gorguis-FZWivbri0Xk-unsplash.jpg";
import cc from "./nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg";
import dd from "./james-owen-c-NBiJrhwdM-unsplash.jpg";
import ee from "./felipe-portella-h6gTtqBZUxc-unsplash.jpg";
import 'react-h5-audio-player/lib/styles.css';
import ff from "./austin-neill-hgO1wFPXl3I-unsplash.jpg";
// import e from './d.m4a'
import { useState } from "react";
import dss from "./pexels-moose-photos-1037992.jpg";
import { color, fontFamily } from "@mui/system";
const DownloadPage = () => {
  let Source = [d, a, b, c, e, f, g, h, i, j, k, ds];
  let imagesource = [aa, bb, cc, dd, ee, ff, aa, bb, cc, ff];
  let name=['petrunko','khansbadosh','Bandish','Gulshan','Churandaas','AedilhaiMushkil','TumHiHo','WajahTumHo','MahiVe','khansbadosh','aashique2','dillMaiChpaLinga','AnsiBalaVida']

  return (
    
    <div>
      <h1>music</h1>
      {imagesource.map((ind , val)=>{
        return(
          <div  style={{
            border: "none ",
            borderRadius: "2vh",
            boxShadow: "22px 22px 22px pink  ",
            backgroundImage: `url(${dss})`,
            backgroundRepeat: "no-repeat",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}

        ><img src={val.imagesource} alt="" />

          </div>
        )
      })}
    </div>
  )
}

export default DownloadPage
