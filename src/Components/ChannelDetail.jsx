import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {FetchAPIFrom} from  "../utils/FetchAPIFrom"
import {ChannelCard,Videos} from './'

const ChannelDetail = () => {

const [channelDetail,setChannelDetail]=useState(null)
const [videos,setVideos]=useState([])

const {id}=useParams()
console.log(useParams())

useEffect(()=>{
  FetchAPIFrom(`channels?part=snippet,statistics&id=${id}`)
  .then((data)=>{(setChannelDetail(data?.items[0]))
  console.log(data)});
  
  FetchAPIFrom(`search?channelId=${id}&part=snippet&order=date`)
.then((data)=>
  (setVideos(data?.items)))
},[id])
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{background:" linear-gradient(90deg, rgba(127,198,31,1) 5%, rgba(145,194,34,1) 49%, rgba(0,212,255,1) 100%)",zIndex:10, height:250,width:"100%"}}/>

<ChannelCard channelDetail={channelDetail} marginTop="-75px" marginBottom="20px"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' }}}> 
      </Box>
        <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail