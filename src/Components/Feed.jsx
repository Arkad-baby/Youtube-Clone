import {useState,useEffect} from 'react'
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Videos} from './';
import { color } from '@mui/system';
import { FetchAPIFrom } from '../utils/FetchAPIFrom';

const Feed = () => {



  const [selectedCategory,setSelectedCategory]=useState("New")

  const [videos,setVideos]=useState([]);  
  


  useEffect(()=>{
    FetchAPIFrom(`search?part=snippet&q=${selectedCategory}`) 
    .then((data)=> {setVideos(data.items)
      console.log(data.items)} )                 
  }
  ,[selectedCategory]);


  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{sx:0,md:2}}}>

        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className='copy-right'
        variant='body2' sx={{mt:1.5, color:"#fff"}}>

          Copyright C 2022 LineCoA
        </Typography>
      </Box>

      <Box p={3} sx={{overflowY:"auto", height:"91vh" ,flex:2}}>
        <Typography variant='h4' sx={{color:"white",mb:2,fontWeight:"bold"}}>
        {selectedCategory}
      
        <span style={{color:"#FC1503",marginLeft:"10px"}}>
          Videos
        </span>
          </Typography> 
          
              <Videos videos={videos} sx={{alignItems:"center"}}/>
      </Box>

 

      
    </Stack>
  )
}

export default Feed