import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Box } from "@mui/material";
import { red } from '@mui/material/colors';
import React from 'react';
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}

export default Feed