import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  let addedDot="";

  if(snippet?.title.slice(0, 60).length===60){
addedDot="..."
  }
  return (
    <Card sx={{width:{xs:"100%",sm:"311px",md:"240px"},boxShadow:"none", border:0,background:"#000"}}>
      <Link to={videoId? `video/${videoId}`:demoVideoUrl}>

        <CardMedia   image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}  alt={snippet.title} 
        sx={{width:{xs:"100%",sm:"308px",md:"240px"},  height:{xs:235,sm:175, md:130}  ,borderRadius:{xs:0, md:6}}}/>

</Link>
    <CardContent sx={{ background: "#000", height: "minmax(auto,96px)"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography sx={{m:0}} variant="body1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)+addedDot || demoVideoTitle.slice(0, 60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` :demoChannelUrl}>

        <Typography variant="caption" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        </Link>
        </CardContent>
    </Card>



  )
}

export default VideoCard