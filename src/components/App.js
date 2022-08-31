import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Feed";
import Navbar from "./Navbar";
import ChannelDetail from "./ChannelDetail";
import SearchFeed from "./SearchFeed";
import VideoDetail from "./VideoDetail";
import axios from "axios";
function App() {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#080c24ff", color: "#ffffffff" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
