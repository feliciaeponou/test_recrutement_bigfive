
import * as React from "react";
import Maintenance from "./components/Maintenance";
import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import NotreExpertise from './components/NotreExpertise';

export default function App() {
  return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/maintenance" element={<Maintenance/>}/>
                <Route path="/NotreExpertise" element={<NotreExpertise/>}/>
            </Routes>
  );
}

