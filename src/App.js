import React,{useState,useEffect} from 'react';
import Video from './Video';
import './App.css';

import db from "./firebase";


function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="App">
      
    <div className="app_videos">
      {videos.map(
        ({
          url,user,description, song, likes, comments, shares,
        })=>(
       <Video
       url={url}
       user={user}
    description={description}
    song={song}
    likes={likes}
    comments={comments}
    shares={shares}

       />
        )
      )}
      
    
     
     
     
      

    </div>

    </div>
  );
}

export default App;
