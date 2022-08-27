import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./Feed";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: "#000"}}>
        Navbar
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<Feed />} />
          <Route path="/channel/:id" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
