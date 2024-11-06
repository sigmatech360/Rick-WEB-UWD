import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screens/Home'
 
 

export default function UserRouter() {
  return (
    <BrowserRouter basename="/Homelessintervensionservices">
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}