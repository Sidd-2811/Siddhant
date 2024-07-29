import './PlayVideo.css'
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment'

const PlayVideo = ({videoId}) => {
    // to change the playvideo real time views
    const[apiData,setApiData] = useState(null);
    // for channel subscribers and logo 
    const[channelData,setChannelData] = useState(null);
    // for comments
    const[commentData, setCommentData] = useState([]);

    const fetchVideoData = async ()=>{
        // fetching videos data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).
        then(res=>res.json()).
        then(data => setApiData(data.items[0]))
        // console.log(data.items[0]);
    }
    // fetching video data on page load
    useEffect(()=>{
        fetchVideoData();
    },[])

    const fetchOtherData = async()=>{
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDataUrl).
        then(res=>res.json()).
        then(data => setChannelData(data.items[0]))
        // fetching comment data
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=1000&videoId=${videoId}&key=${API_KEY}`

         await fetch(commentUrl).
         then(res=>res.json()).
         then(data=>setCommentData(data.items))

    }
    useEffect(()=>{
fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
 {/* <video controls autoPlay  src={video1}></video> */}
 <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>

        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"}{" "} views &bull; {" "}
                {apiData?moment(apiData.snippet.publishedAt).fromNow():"15 days ago"}
            </p>
        <div>
            <span> <img src={like} alt="" />{value_converter(apiData?apiData.statistics.likeCount:"120")}</span>
            <span> <img src={dislike} alt="" /> </span>
            <span> <img src={share} alt="" /> Share</span>
            <span> <img src={save} alt="" /> Save</span>
        </div>
        
       </div>
       <hr />
                {/* 1  */}
       <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url : ""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle : "Channel Name"}</p>
            <span>{value_converter(channelData?channelData.statistics.subscriberCount:"1M")} Subscribers</span>
        </div>
        <button>Subscribe</button>
       </div>
                {/* 2 */}
       <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Description here"}</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):"20"} Comments</h4>

            {/* 3 */}
            {commentData.map((item,index)=>{
                return (
                    <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    
                    <div className="comment-action">
                        <img src={like} alt="" /> <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" /> <span>4</span>
                    </div>
                </div>
            </div>
                )
            })}
            
            
           
           
       </div>

    </div>
  )
}

export default PlayVideo