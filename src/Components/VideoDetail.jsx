import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import { Typography,Box,Stack } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom'

import { ChannelCard } from './'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { FetchAPIFrom } from '../utils/FetchAPIFrom'
import {Videos} from './'

const VideoDetail = () => {

const [videoDetail,setVideoDetail]=useState(null)
const [videos,setVideos]=useState(null)
const {id}=useParams();




useEffect(()=>{
  FetchAPIFrom(`videos?.part=snippet,statistics&id=${id}`)
   .then((data)=>{setVideoDetail(data.items[0])})

FetchAPIFrom(`search?.part=snippet&relatedToVideoId=${id}&type=video`)
.then((data)=>{
  setVideos(data.items)
  console.log(data.items)
})

},[id])

if(!videoDetail?.snippet) return;
const {snippet:{title,channelTitle, channelId,channelDetail},statistics:{viewCount,likeCount}}=videoDetail;
console.log(videoDetail)

  return (
    <Box minHeight={"auto"}>
      <Stack  direction={{ xs: "column", md: "row" }}  >

      <Box sx={{position:{sx:"fixed", md:"sticky"},top:"88px",width:{sx:"100%",md:"75%"},marginBottom:"20px"}} >
        <Box>  <ReactPlayer url={`youtube.com/watch?v=${id}`} className="react-player" controls /></Box>

        <Stack  sx={{display:"flex", flexDirection:{sx:'column', md:'row'},alignItems:{md:"center"}, justifyContent:{md:"space-between"} }}>      
          
  
          <Typography fontSize={"large"}  color="white" mx={3} my={2}>
          {title}
        </Typography>
  
        

        <Stack flexDirection={"row"} justifyContent="start" fontSize={"large"}  color="white" ml={3}  sx={{display:"flex", justifyContent:"start", mb:{xs:"16px", md:"0"}}}>
     

         <Typography variant={"body1"} style={{marginRight:"20px",opacity: 0.7}}>  {parseInt(viewCount).toLocaleString() + ` `}  Views</Typography>

         <Typography variant={"body1"} sx={{textAlign:"center",opacity: 0.7}}> {parseInt(likeCount).toLocaleString()}    </Typography>
         <ThumbUpOffAltIcon sx={{fontSize:'22px',ml:"5px"}} />

        </Stack>

        </Stack>

        <Link to={`/channel/${channelId}`}>  
  <Typography color="gray" mx={3}  variant="body2">
      {channelTitle}  <CheckCircleIcon sx={{fontSize:"14px", color:"gray" }}/>
     </Typography>
     </Link>  
   
     </Box>      
 

<Box  px={1} mx={"auto"} sx={{ overflowY:{sx:"none", md:"auto"},height:{sx:"auto",md:"88.2vh"}}}>
      <Videos  videos={videos}  direction="column"/>
</Box>

      
    </Stack>

    </Box>


  )
}

export default VideoDetail