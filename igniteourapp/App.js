/*
*HMR -Hot Module Reloading
* File Watcher algorithm -C++
*BUNDLING
* MINIFY
* Cleaning our code
* Dev abd Production Build
* Super Fast build algorithm
* Image Optimization
*Chaching While development
*Compression
*Compatble with older version of browser
*HTTPS On Dev
*Port Number
*Consistent Hashing Algorithm
* Zero Config 
*/



import React from "react";
import  ReactDOM  from "react-dom";
const heading = React.createElement("h1",{
    id:"title"
},"Nameste EveryOne !");
const heading1 = React.createElement("h2",{
    id:"title"
},"Hello EveryOne");
const container = React.createElement("h1",{
    id:"container"
},[heading,heading1]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container)
