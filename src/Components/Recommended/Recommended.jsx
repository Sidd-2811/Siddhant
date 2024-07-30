import "./Recommended.css";

import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  // store data that are coming from api
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=Us&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideoUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  // first time render jaise ho waise hi ye chale([] for first time rendering)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {/* implementing map to get the data from the api */}
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              {/* <h4>{item.snippet.title}</h4> */}
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default Recommended;
