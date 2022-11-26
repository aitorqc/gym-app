import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1448px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
