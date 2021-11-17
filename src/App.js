// import logo from './logo.svg';
// import './App.css';
// import Maintenance from "./Maintenance";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./styles.css";

import * as React from "react";
import Maintenance from "./Maintenance";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotreExpertise from './NotreExpertise';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>



export default function App() {
  // const maintenance = false;
  return (
    <>
      {/* {maintenance ? (
        <Maintenance />
      ) : (
        <Home />
      )} */}

          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/maintenance" element={<Maintenance/>}/>
                <Route path="/NotreExpertise" element={<NotreExpertise/>}/>
                
            </Routes>
            </BrowserRouter>
      
    </>
  );
}

