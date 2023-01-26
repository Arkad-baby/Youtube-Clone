import {useState,useEffect} from 'react'
import { Box, Typography } from "@mui/material";
import {Videos} from './';
import { FetchAPIFrom } from '../utils/FetchAPIFrom';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const {searchTerm}=useParams();



  const [videos,setVideos]=useState([]); 

  


  useEffect(()=>{
    FetchAPIFrom(`search?part=snippet&q=${searchTerm}`) 
    .then((data)=> {setVideos(data.items)} )                 
  }
  ,[searchTerm]);


  return (
    <Box p={3} sx={{overflowY:"auto", height:"90vh" ,flex:2}}>
    <Typography variant='h4' sx={{color:"white",mb:2,fontWeight:"bold",ml:5}}>
    {}
  Search result for 
    <span style={{color:"#FC1503",marginLeft:"10px"}}>
      {searchTerm +" "}
    </span>
    Videos
      </Typography> 
      
          <Videos videos={videos} sx={{alignItems:"center"}}/>
  </Box>
  )
}

export default SearchFeed