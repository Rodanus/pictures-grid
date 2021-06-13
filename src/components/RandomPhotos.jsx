import React, { useState, useEffect, Fragment } from "react";
import PhotosList from "./PhotosList";
import PhotoModel from "./PhotoModel";
import "./RandomPhotos.css";

export default function RandomPhotos() {
  const [photos, setPhotos] = useState([]);
  const [viewPhoto, setViewPhoto] = useState({
    viewPhoto: false,
    urls: {},
    user: {},
    links: {}
  });
  const enableViewPhoto = photo => {
    const { urls, user, links } = photo;
    setViewPhoto({ viewPhoto: [!viewPhoto], urls, user, links });
  };

  // useEffect(() => {
  //   const fetchingData = async () => {
  //     const randomPics = await fetch(
  //       `https://api.unsplash.com/photos/random?count=30&client_id=${process.env.REACT_APP_CLIENTID}`
  //     ).then(res => res.json());
  //     setPhotos(randomPics);
  //   };
  //   fetchingData();
  // }, []);

  return (
    <Fragment>
      <PhotoModel viewPhoto={viewPhoto} />
      <PhotosList
        photos={photos}
        title="For You To Check:"
        enableViewPhoto={enableViewPhoto}
      />
    </Fragment>
  );
}
