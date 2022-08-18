import React from "react";
import "./MusicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseIcon from "@mui/icons-material/Pause";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {db, storage} from '../firebase--config'
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
import { useState,useEffect } from "react";
import dss from "./pexels-moose-photos-1037992.jpg";
import { color, fontFamily } from "@mui/system";
import { collection, getDocs,addDoc } from "firebase/firestore";
import {ref,uploadBytes,listAll, getDownloadURL} from 'firebase/storage'
import { alertClasses } from "@mui/material";
import { RssFeed } from "@material-ui/icons";
const MusicPlayer = () => {
  const [songsss, setsongs] = useState([])
  const [playings, setPlayings] = useState(false);
  const [number, setnumber] = useState(3);
  const [icon, seticon] = useState(0);
  const [file, setfile] = useState([])
  const [imageList, setImagelist] = useState([])


  const collectionref=collection(db,"songs")
  useEffect(()=>{
    const getdata=async()=>{
      const data=await getDocs(collectionref)
      setsongs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("12",songsss)

    };
    getdata();
  },[])
  const send = async () => {
    await addDoc(collectionref, { img: file, });
  };

var audioElement = new Audio(d);

  function FunctionCall() {
    togglePlay();
  }
  function togglePlay() {
    if (audioElement.paused) {
      audioElement.play();
      // setPlayings(!playings)
    } else {
      audioElement.pause();
    }
  }

  const setindex = () => {
    setnumber(number + 1);
  };
  const setindex2 = () => {
    // eslint-disable-next-line eqeqeq
    if (number == !0) {
      setnumber(number);
    } else {
      setnumber(number - 1);
    }
  };
  let Source = [d, a, b, c, e, f, g, h, i, j, k, ds];
  let imagesource = [aa, bb, cc, dd, ee, ff, aa, bb, cc, ff];
  let name=['petrunko','khansbadosh','Bandish','Gulshan','Churandaas','AedilhaiMushkil','TumHiHo','WajahTumHo','MahiVe','khansbadosh','aashique2','dillMaiChpaLinga','AnsiBalaVida']
//upload image
const upload=()=>{
if(file==null)return
const imgref=ref(storage,`audio/${file.name}`)
uploadBytes(imgref,file).then(()=>{
  alert("uploaded")
  storage.ref(`/images/${file.name}`).put(file)
  .on("state_changed" , alert("success") , alert);
}).catch((e)=>{
  console.log(e)
})
}
const imageListRef=ref(storage,'audio/')
// 
useEffect(() => {
  listAll(imageListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImagelist((prev) => [...prev, url]);
        console.log(imageList)
      });
    });
  });
}, []);
  
  return (
    <div
      className="d"
      style={{
        border: "none ",
        borderRadius: "2vh",
        boxShadow: "22px 22px 22px pink  ",
        backgroundImage: `url(${dss})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>armaan</h1>
      <button>armaan</button>
      

      <div
        style={{
          border: "none",
          borderRadius: "20px",
          trasparent: "true",
          backgroundColor: "whitesmoke",
          backgroundImage: `url(${dss})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width:'800px'
        }}
        className="player wrapper "
      >
       
       
       <h1 style={{ marginTop:'70px',fontSize:'50px',fontFamily:'cursive',color:'ThreeDShadow'}} className="fs-1">{name[number]}<MusicNoteIcon style={{fontSize:'40px'}}/></h1> {/* <img style={{  opacity: '0.8',border:'10px solid #E55D87 '}} width='100%'height='200px' src={imagesource[number]} alt="" /> */}
        <AudioPlayer
        style={{
          boxShadow: "22px 22px -22px #17a2b8",
          marginBottom: "5px",
          backgroundImage: `url(${dss})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "black",
          textColor: "white",
          borderRadius: "10px",
          width: "500px",
          marginLeft: "-32%",
          marginTop:'500px'
        }}
        width='200px'
        autoPlay
        
        src={Source[number]}
        horizontal
        autoPlayAfterSrcChange
        
        showSkipControls
        onClickNext={setindex}
        onClickPrevious={setindex2}
        />
        


      </div>

      <h1>New Player </h1>
      {/* <button onClick={upload} className="btn btn-primary "> ADD</button>
      <input
        onChange={(e) => setfile(e.target.files)}
        type="file"
        multiple="multiple"
      /> */}
      {/* <input type="file" onChange={(e) => setfile(e.target.file)} /> */}
      {/* {songsss.map((user,id)=>{
        return(
          <div key={id}>
<h1>{user.url}</h1>
<h1>armaaaaa</h1>
          </div>
        )
      })} */}
      
      
    </div>
  );
};

export default MusicPlayer;

      