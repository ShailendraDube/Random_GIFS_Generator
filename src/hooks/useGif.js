import React from "react";
import Tag from "../components/Tag";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


//By process we can access env file   
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) =>  {

  const[gif,setgif] = useState('');
  const[loading,setloading] = useState('false');

  async function fetchData(tag) {
    setloading(true);

    // following line will shown the path where GIF url image is stored  
   const {data} = await axios.get(tag ? `${url }&tag=${tag}` : (url));
   const imagesource = data.data.images.downsized_large.url;

   setgif(imagesource)
   setloading(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return {gif,loading,fetchData}

}

export default useGif;
