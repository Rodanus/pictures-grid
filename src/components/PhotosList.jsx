import React from "react";
import Photo from "./Photo";

export default function PhotosList({ photos }) {
  return (
    <div className="photos">
      {photos.length > 0 ? (
        //   Todo: make sure that you pass the url of the photo instead of the whole photo
        photos.map(photo => <Photo photo={photo} />)
      ) : (
        <h2>Search for something to see the photos!</h2>
      )}
    </div>
  );
}
