import React,{useRef,useState} from 'react'


import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';


function Video({ url,user,description,song,likes,comments,shares}) {
    

    const[Playing,SetPlaying]= useState(false);


    const videoRef = useRef(null);

    const onVideoPress=()=>{
        if(Playing){
            videoRef.current.pause();
            SetPlaying(false);

        }
        else{
        videoRef.current.play();
        SetPlaying(true);
        }
    };


    return (
        <div className="video">
           
           <video className="video_player" width="100%" height="100%" 
           loop
           
           onClick={onVideoPress}
          // url={url}
         
           ref={videoRef} 
        >
            <source src={url} type='video/mp4' />
      
     </video>
              <VideoFooter user={user} description={description} song={song}/>
              <VideoSideBar likes={likes} shares={shares} comments={comments}/>
        </div>
    )
}

export default Video

