import React from "react";
import { Box,CardContent, CardMedia,Typography } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom"; 
import { demoProfilePicture } from "../utils/constant";


const ChannelCard = ({channelDetail,marginTop,marginBottom}) => {
  return (
    <Box
    sx={{
      boxShadow:"none",
      borderRadius:"20px",
      display:"flex",
      margin:"auto",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:"column",
      width:{xs:"100%",sm:"308px",md:"240px"},
      height:{xs:"250px", sm:"180px"},
      marginTop,
      marginBottom
    }}>
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
<CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
         <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url|| demoProfilePicture } alt={channelDetail?.snippet?.tittle}  sx={{ borderRadius: '50%', height: '150px',width:"150px" , mt: 3, border: '1px solid #e3e3e3' }} />

       <Typography variant="subtitle2" sx={{color:"gray",font:"10px",mt:1}}>
         {channelDetail?.snippet?.title} 
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
       </Typography>
       <Typography >
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{fontSize:"15px",fontWeight:500,color:"gray"}}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers
          </Typography>
        )}
       </Typography>
</CardContent>

</Link>

    </Box>
  )
}

export default ChannelCard