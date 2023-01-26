import { Stack,Box } from "@mui/material"
import {ChannelCard,VideoCard,Loaders} from "./"


const Videos = ({videos,direction}) => {
  if(!videos?.length) return <Loaders />
  return(  
  <Stack flexDirection={direction || "row"} flexWrap={"wrap"} justifyContent="center" gap={2}>
  {videos.map((item,idx)=>(
    <Box key={idx}>
{item.id.videoId && <VideoCard video={item} />}
{item.id.channelId && <ChannelCard channelDetail={item} />}
    </Box>
      
     ))}
  </Stack>
   
 )

}




export default Videos