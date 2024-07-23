import './PlayVideo.css'
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
const PlayVideo = ({videoId}) => {
    console.log(videoId);
  return (
    <div className='play-video'>
 {/* <video controls autoPlay  src={video1}></video> */}
 <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
        <h3>Best Youtube Channel to learn web Development</h3>

        <div className="play-video-info">
            <p>1532 Views &bull; 2 days ago</p>
        <div>
            <span> <img src={like} alt="" /> 125</span>
            <span> <img src={dislike} alt="" /> 12</span>
            <span> <img src={share} alt="" /> Share</span>
            <span> <img src={save} alt="" /> Save</span>
        </div>
        
       </div>
       <hr />
                {/* 1  */}
       <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>GreatStack</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
                {/* 2 */}
       <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack To Watch More Amazing Content on Web Development</p> 
            <hr />
            <h4>130 Comments</h4>
            {/* 3 */}
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Anurag Shastri <span>1 day ago</span></h3>
                    <p>Your videos are so informative</p>
                    
                    <div className="comment-action">
                        <img src={like} alt="" /> <span>244</span>
                        <img src={dislike} alt="" /> <span>4</span>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Anurag Shastri <span>1 day ago</span></h3>
                    <p>Your videos are so informative</p>
                    
                    <div className="comment-action">
                        <img src={like} alt="" /> <span>244</span>
                        <img src={dislike} alt="" /> <span>4</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Anurag Shastri <span>1 day ago</span></h3>
                    <p>Your videos are so informative</p>
                    
                    <div className="comment-action">
                        <img src={like} alt="" /> <span>244</span>
                        <img src={dislike} alt="" /> <span>4</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Anurag Shastri <span>1 day ago</span></h3>
                    <p>Your videos are so informative</p>
                    
                    <div className="comment-action">
                        <img src={like} alt="" /> <span>244</span>
                        <img src={dislike} alt="" /> <span>4</span>
                    </div>
                </div>
            </div>
       </div>

    </div>
  )
}

export default PlayVideo