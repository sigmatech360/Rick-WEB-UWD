
// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,700&display=swap');

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import logo from '../src/Assets/images/logo.png'
// import 'swiper/swiper-bundle.min.css';
import UserRouter from './Routers/index'
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import { Link } from 'react-router-dom';
import Home from './Screens/Home';
// import {  SwiperSlide } from 'swiper/react';
// import  {  Autoplay } from 'swiper';


function App() {

 

    return (
        <>

<UserRouter/>

        </>

    );
}

export default App;
