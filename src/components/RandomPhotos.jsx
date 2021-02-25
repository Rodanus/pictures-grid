import React, { useState, useEffect } from "react";
import PhotosList from "./PhotosList";
import "./RandomPhotos.css";

export default function RandomPhotos() {
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const randomPics = await fetch(
  //       `https://api.unsplash.com/photos/random?count=30&client_id=${process.env.REACT_APP_CLIENTID}`
  //     ).then(res => res.json());
  //     setPhotos(randomPics);
  //   };
  //   fetchingData();
  // }, []);

  return <PhotosList photos={photos} title="For You To Check:" />;
}
