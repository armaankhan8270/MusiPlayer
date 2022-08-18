import React from 'react'
import ReactPlayer from 'react-player/lazy'
import ReactAudioPlayer from 'react-audio-player';
import  { useRef, useState } from "react";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import download from './download.jpg'
import pe from './pexels-dids-1616470.jpg'


// Lazy load the YouTube player


const MediaPlayer = () => {
  let url='http://pixabay.com/illustrations/pixel-game-among-us-pixel-art-6063246/'
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  }
  const [name]= useState({
   b:[{

     names:'armaan',
      surname:'khan' 
      
    }
  ]
  })
  const [Songs]=useState({
    songs:[
      {
        name: 'Elanodsdsr Rigby',
        artist: 'The Beatles',

        cover: 'http://www.pexels.com/photo/black-and-white-book-composing-document-210804/',
        musicSrc: 'http://www.youtube.com/watch?v=ysz5S6PUM-U',
       

      },
      {
        name: 'dsjdsdsdsr Rigby',
        artist: 'The Beatles',

        cover: 'http://www.pexels.com/photo/black-and-white-book-composing-document-210804/',
        musicSrc: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
       

      },
      {
        name: 'slkfmsodsdsr Rigby',
        artist: 'The Beatles',

        cover: '/src/Components/pexels-dids-1616470.jpg',
        musicSrc: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
       

      },
      {
        name: 'bfganodsdsr Rigby',
        artist: 'The Beatles',

        cover: 'http://www.pexels.com/photo/black-and-white-book-composing-document-210804/',
        musicSrc: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
       

      },
      {
        name: 'blasfsnor Rigby',
        artist: 'The Beatles',

        cover: './pexels-dids-1616470.jpg',
        musicSrc: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
      } 
    ]

  })
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const [NextIndex, setNextIndex] = useState(CurrentIndex+1)
    const songs=['http://www.youtube.com/watch?v=fd7mwyZOzF8','http://www.youtube.com/watch?v=Q8FUQawC_1I','http://www.youtube.com/watch?v=ZiKyW2oFuzs']
    
 
        
    
  return (
    <div>MediaPlayer
      <img src={download} alt="" />
        <img width="640px" height="20px"src="./download.jpg" alt="s" />
        <ReactPlayer  width='100%'
          height='70%'  controls url='http://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <div className='player-wrapper'>
        <ReactPlayer style={{
            position: 'relative',
            paddingTop: '5.25%'
        }}
         
          url='http://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='70%'
        />
      </div>
      <div style={{backgroundColor:'whitesmoke',fontStyle:'italic',boxShadow:'23px 22px 21px'}} className=' mt-5 mb-5 rounded display-1'>
        Music
          </div>
        <div  style={{backgroundColor:'whitesmoke',fontStyle:'italic',boxShadow:'23px 22px 20px black'}} className=' mt-5  rounded display-1'>
        <ReactPlayer  width='100%'
          height='100px'  controls url={Songs.songs.musicSrc} />
      </div>
      {
        
        Songs.songs.map((song,index)=>{
          
          return(
            
           
            
            <div width="200px" height="400px" key={index} style={{margin:'33%',width:"413px",height:"597px",backgroundColor:'whitesmoke',fontStyle:'italic',boxShadow:'23px 22px 20px black',alignItems: 'center'}} className=' mt-5  rounded display-1'>
           if (index==0) {
            <>
             <img style={{animation: 'spin 5s infinite linear'}} src={pe} width="200px" height="400px"alt={song.name} /> <ReactPlayer  width='300px'
              height='100px'  controls url={song.musicSrc} />
            </>
            
           }
           {/* <img style={{animation: 'spin 5s infinite linear'}} src={pe} width="200px" height="400px"alt={song.name} /> <ReactPlayer  width='300px'
              height='100px'  controls url={song.musicSrc} /> */}
          </div>
          )
        })
      }
    
         
      {name.map((index,value)=>{
        return (
          <>
          <h1 className='display-1 bg-primary'>{value.b}</h1>
          </>

        )
      })}
      
    

       
    </div>
  )
}

export default MediaPlayer