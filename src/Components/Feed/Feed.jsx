
import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import moment from 'moment';
import { API_KEY, value_converter } from "../../data";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
export const Feed = ({category}) => {
// create state variable to store the data that are coming from dat api
const[data,setdata] = useState([]); 

    const fetchData = async()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=Us&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then(response=>response.json())
        .then((data)=>setdata(data.items))
        console.log(data)
    }
    // use useEffect when the func is loaded then it run useEffect once
    useEffect(()=>{
        fetchData();
    },[category])
  return (
        <>
     <div className="feed">
        {/* add data api in the fed to show dynamic feed */}
         {/* eslint-disable-next-line no-unused-vars */}
        {data.map((item,index)=>{
        return( 
        <Link
         key={index}
         to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
         </Link>

        )
    }
        )}
      </div>
      </>
  )
}
