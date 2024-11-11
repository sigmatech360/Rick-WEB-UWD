import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screens/Home'
import About from "../Screens/about";
import OurWork from "../Screens/ourwork";
import GetHelp from "../Screens/gethelp";
import Givedonation from "../Screens/givedonation";
import Contactus from "../Screens/contactus";
 
 

export default function UserRouter() {
  return (
    <BrowserRouter basename="/Homelessintervensionservices">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/gethelp" element={<GetHelp/>} />
        <Route path="/givedonation" element={<Givedonation/>} />
        <Route path="/contactus" element={<Contactus/>} />
         



        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}