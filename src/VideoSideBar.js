import React ,{useState}from 'react'
import './VideoSideBar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';

function VideoSideBar({
    likes,
    comments,
    shares
}) {
    const [liked,setLiked] = useState(false);
    return (
        <div className="videosidebar">
            <div className="videosidebar_button">

                {liked?(
            <FavoriteIcon
            onClick={e=>setLiked(false)}
            />
                ):(
                    <FavoriteBorderIcon
                    onClick={e=>setLiked(true)}
                    />
                )}
            <p>{liked? likes+1:likes}</p>


            </div>
            <div className="videosidebar_button">
            <ChatIcon/>
            <p>{comments}</p>
            </div>
            <div className="videosidebar_button">
            <ShareIcon/>
            <p>{shares}</p>
            
            </div>
        </div>
    )
}

export default VideoSideBar
