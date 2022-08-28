import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Feed";
import Navbar from "./Navbar";
import ChannelDetail from "./ChannelDetail";
import SearchFeed from "./SearchFeed";
import VideoDetail from "./VideoDetail";
function App() {
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
