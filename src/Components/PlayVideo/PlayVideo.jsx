import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const {videoId} = useParams()
    // to change the playvideo real time views
    const[apiData,setApiData] = useState(null);
    // for channel subscribers and logo 
    const[channelData,setChannelData] = useState(null);
    // for comments
    const[commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    //fetching videos data
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const resp = await fetch(videoDetail_url);
    const res = await resp.json();
    setApiData(res.items[0]);

    // console.log(res)
  };

  const fetchOtherData = async () => {
    //fetching channel data
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelDataUrl)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]); //[apiData]

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);
  return (
    <>
      <div className="play-video">
        {/* <video controls autoPlay  src={video1}></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3>{apiData ? apiData.snippet.title : "Title not found"} </h3>
        <div className="play-video-info">
          <p>
            {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}{" "}
            views &bull;{" "}
            {apiData
              ? moment(apiData.snippet.publishedAt).fromNow()
              : "15 days ago"}
          </p>
          <div>
            <span>
              <img src={like} alt="" />
              {apiData ? value_converter(apiData.statistics.likeCount) : "155"}
            </span>
            <span>
              <img src={dislike} alt="" />
            </span>
            <span>
              <img src={share} alt="" />
              Share
            </span>
            <span>
              <img src={save} alt="" />
              Save
            </span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div>
            <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
            <span>
              {channelData
                ? value_converter(channelData.statistics.subscriberCount)
                : ""}{" "}
              Subscribers
            </span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>
            {apiData
              ? apiData.snippet.description.slice(0, 250)
              : "Description Here"}
          </p>
          <hr />
          <h4>
            {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
            comments
          </h4>

          {commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                />
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span>{item.snippet.topLevelComment.snippet.textDisplay}</span>
                  </h3>
                  <p>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                  <div className="comment-action">
                    <img src={like} alt="" />
                    <span>
                      {value_converter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </span>
                    <img src={dislike} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlayVideo;