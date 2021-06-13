import React from 'react'
import './VideoFooter.css'
import Ticker from 'react-ticker'

import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter({
    user,
    description,
    song
}) {
    return (
        <div className="videofooter">
           
            <div className="videofooter_text">
            <h3>@{user}</h3>
           <p>{description}</p>
           <MusicNoteIcon/>
           <Ticker mode="smooth">
               {({index})=>(
                   <>
                   <p>{song}</p>
                   </>
               )
                   
               }
           </Ticker>
            </div>
            <img className="videofooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="music"/>

        </div>
    )
}

export default VideoFooter
