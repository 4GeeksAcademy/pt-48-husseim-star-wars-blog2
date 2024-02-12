//import react into the bundle
import React from 'react'
import { createRoot } from 'react-dom/client'
import backgroundImage from '../img/star-wars-background.png';

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "repeat";

//render your react application
root.render(<Layout />)